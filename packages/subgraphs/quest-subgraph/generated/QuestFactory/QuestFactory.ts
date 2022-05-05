// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DepositChanged extends ethereum.Event {
  get params(): DepositChanged__Params {
    return new DepositChanged__Params(this);
  }
}

export class DepositChanged__Params {
  _event: DepositChanged;

  constructor(event: DepositChanged) {
    this._event = event;
  }

  get timestamp(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class QuestCreated extends ethereum.Event {
  get params(): QuestCreated__Params {
    return new QuestCreated__Params(this);
  }
}

export class QuestCreated__Params {
  _event: QuestCreated;

  constructor(event: QuestCreated) {
    this._event = event;
  }

  get questAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get questTitle(): string {
    return this._event.parameters[1].value.toString();
  }

  get questDetailsRef(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get rewardTokenAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get expireTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get fundsRecoveryAddress(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get depositToken(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get depositAmount(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[8].value.toAddress();
  }
}

export class QuestFactory__depositResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class QuestFactory extends ethereum.SmartContract {
  static bind(address: Address): QuestFactory {
    return new QuestFactory("QuestFactory", address);
  }

  aragonGovernAddress(): Address {
    let result = super.call(
      "aragonGovernAddress",
      "aragonGovernAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_aragonGovernAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "aragonGovernAddress",
      "aragonGovernAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createQuest(
    _questTitle: string,
    _questDetailsRef: Bytes,
    _rewardToken: Address,
    _expireTime: BigInt,
    _fundsRecoveryAddress: Address
  ): Address {
    let result = super.call(
      "createQuest",
      "createQuest(string,bytes,address,uint256,address):(address)",
      [
        ethereum.Value.fromString(_questTitle),
        ethereum.Value.fromBytes(_questDetailsRef),
        ethereum.Value.fromAddress(_rewardToken),
        ethereum.Value.fromUnsignedBigInt(_expireTime),
        ethereum.Value.fromAddress(_fundsRecoveryAddress)
      ]
    );

    return result[0].toAddress();
  }

  try_createQuest(
    _questTitle: string,
    _questDetailsRef: Bytes,
    _rewardToken: Address,
    _expireTime: BigInt,
    _fundsRecoveryAddress: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createQuest",
      "createQuest(string,bytes,address,uint256,address):(address)",
      [
        ethereum.Value.fromString(_questTitle),
        ethereum.Value.fromBytes(_questDetailsRef),
        ethereum.Value.fromAddress(_rewardToken),
        ethereum.Value.fromUnsignedBigInt(_expireTime),
        ethereum.Value.fromAddress(_fundsRecoveryAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  deposit(): QuestFactory__depositResult {
    let result = super.call("deposit", "deposit():(address,uint256)", []);

    return new QuestFactory__depositResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_deposit(): ethereum.CallResult<QuestFactory__depositResult> {
    let result = super.tryCall("deposit", "deposit():(address,uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new QuestFactory__depositResult(value[0].toAddress(), value[1].toBigInt())
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _aragonGovernAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _depositToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _depositAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateQuestCall extends ethereum.Call {
  get inputs(): CreateQuestCall__Inputs {
    return new CreateQuestCall__Inputs(this);
  }

  get outputs(): CreateQuestCall__Outputs {
    return new CreateQuestCall__Outputs(this);
  }
}

export class CreateQuestCall__Inputs {
  _call: CreateQuestCall;

  constructor(call: CreateQuestCall) {
    this._call = call;
  }

  get _questTitle(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _questDetailsRef(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _rewardToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _expireTime(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _fundsRecoveryAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class CreateQuestCall__Outputs {
  _call: CreateQuestCall;

  constructor(call: CreateQuestCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetDepositCall extends ethereum.Call {
  get inputs(): SetDepositCall__Inputs {
    return new SetDepositCall__Inputs(this);
  }

  get outputs(): SetDepositCall__Outputs {
    return new SetDepositCall__Outputs(this);
  }
}

export class SetDepositCall__Inputs {
  _call: SetDepositCall;

  constructor(call: SetDepositCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetDepositCall__Outputs {
  _call: SetDepositCall;

  constructor(call: SetDepositCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
