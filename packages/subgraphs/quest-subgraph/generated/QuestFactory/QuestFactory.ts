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
}
