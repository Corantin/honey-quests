import {
  QuestCreated,
  DepositChanged,
} from '../generated/QuestFactory/QuestFactory';
import { CreateDepositEntity, QuestEntity } from '../generated/schema';
import { BigInt, Bytes, ipfs } from '@graphprotocol/graph-ts';
import { json } from '@graphprotocol/graph-ts';
export function handleDepositChanged(event: DepositChanged): void {
  let depositEntity = new CreateDepositEntity(
    `Create_${event.params.timestamp.toString()}_${event.params.token.toHex()}_${event.params.amount.toHex()}`
  );

  depositEntity.timestamp = event.params.timestamp;
  depositEntity.depositToken = event.params.token;
  depositEntity.depositAmount = event.params.amount;

  depositEntity.save();
}

export function handleQuestCreated(event: QuestCreated): void {
  let questEntity = new QuestEntity(event.params.questAddress.toHex());
  questEntity.questAddress = event.params.questAddress.toHexString();
  questEntity.questTitle = event.params.questTitle;
  questEntity.questDetailsRef = event.params.questDetailsRef;
  questEntity.questRewardTokenAddress = event.params.rewardTokenAddress;
  questEntity.questExpireTimeSec = event.params.expireTime;
  questEntity.creationTimestamp = event.block.timestamp;
  questEntity.questFundsRecoveryAddress = event.params.fundsRecoveryAddress;
  questEntity.questCreateDepositToken = event.params.depositToken;
  questEntity.questCreateDepositAmount = event.params.depositAmount;
  questEntity.questCreator = event.params.creator;
  questEntity.questMaxPlayers = null;

  if (!event.params.questDetailsRef) {
    questEntity.questDescription = '';
  } else {
    // Fetching quest description with IPFS
    let questDataBytes: Bytes | null = null;
    let tryCount = 0;
    while (!questDataBytes && tryCount < 3) {
      // 3 tries in total (180 sec for each try)
      questDataBytes = ipfs.cat(event.params.questDetailsRef.toString());
      tryCount = tryCount + 1;
    }
    if (questDataBytes) {
      let jsonResult = json.try_fromBytes(questDataBytes);
      if (jsonResult.isOk) {
        let jsonObject = jsonResult.value.toObject();
        let communicationLink = jsonObject.get('communicationLink');
        let questDescription = jsonObject.get('description');
        questEntity.questCommunicationLink = communicationLink
          ? communicationLink.toString()
          : '';
        questEntity.questDescription = questDescription
          ? questDescription.toString()
          : '';
      } else {
        let description = questDataBytes.toString();
        questEntity.questDescription = description
          ? description.toString()
          : '';
      }
    } else {
      // Continue with empty description
      questEntity.questDescription = '';
    }
  }

  questEntity.save();
}
