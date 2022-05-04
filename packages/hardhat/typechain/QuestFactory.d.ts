/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface QuestFactoryInterface extends ethers.utils.Interface {
  functions: {
    "aragonGovernAddress()": FunctionFragment;
    "createQuest(string,bytes,address,uint256,address)": FunctionFragment;
    "deposit()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setDeposit(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "aragonGovernAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createQuest",
    values: [string, BytesLike, string, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDeposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "aragonGovernAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createQuest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDeposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "DepositChanged(uint256,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "QuestCreated(address,string,bytes,address,uint256,uint256,address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DepositChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuestCreated"): EventFragment;
}

export class QuestFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: QuestFactoryInterface;

  functions: {
    aragonGovernAddress(overrides?: CallOverrides): Promise<[string]>;

    "aragonGovernAddress()"(overrides?: CallOverrides): Promise<[string]>;

    createQuest(
      _questTitle: string,
      _questDetailsRef: BytesLike,
      _rewardToken: string,
      _expireTime: BigNumberish,
      _fundsRecoveryAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createQuest(string,bytes,address,uint256,address)"(
      _questTitle: string,
      _questDetailsRef: BytesLike,
      _rewardToken: string,
      _expireTime: BigNumberish,
      _fundsRecoveryAddress: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    deposit(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { token: string; amount: BigNumber }>;

    "deposit()"(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { token: string; amount: BigNumber }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setDeposit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setDeposit(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  aragonGovernAddress(overrides?: CallOverrides): Promise<string>;

  "aragonGovernAddress()"(overrides?: CallOverrides): Promise<string>;

  createQuest(
    _questTitle: string,
    _questDetailsRef: BytesLike,
    _rewardToken: string,
    _expireTime: BigNumberish,
    _fundsRecoveryAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createQuest(string,bytes,address,uint256,address)"(
    _questTitle: string,
    _questDetailsRef: BytesLike,
    _rewardToken: string,
    _expireTime: BigNumberish,
    _fundsRecoveryAddress: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  deposit(
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { token: string; amount: BigNumber }>;

  "deposit()"(
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { token: string; amount: BigNumber }>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setDeposit(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setDeposit(address,uint256)"(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    aragonGovernAddress(overrides?: CallOverrides): Promise<string>;

    "aragonGovernAddress()"(overrides?: CallOverrides): Promise<string>;

    createQuest(
      _questTitle: string,
      _questDetailsRef: BytesLike,
      _rewardToken: string,
      _expireTime: BigNumberish,
      _fundsRecoveryAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "createQuest(string,bytes,address,uint256,address)"(
      _questTitle: string,
      _questDetailsRef: BytesLike,
      _rewardToken: string,
      _expireTime: BigNumberish,
      _fundsRecoveryAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    deposit(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { token: string; amount: BigNumber }>;

    "deposit()"(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { token: string; amount: BigNumber }>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setDeposit(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setDeposit(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    DepositChanged(timestamp: null, token: null, amount: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    QuestCreated(
      questAddress: null,
      questTitle: null,
      questDetailsRef: null,
      rewardTokenAddress: null,
      expireTime: null,
      creationTime: null,
      fundsRecoveryAddress: null,
      depositToken: null,
      depositAmount: null
    ): EventFilter;
  };

  estimateGas: {
    aragonGovernAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "aragonGovernAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    createQuest(
      _questTitle: string,
      _questDetailsRef: BytesLike,
      _rewardToken: string,
      _expireTime: BigNumberish,
      _fundsRecoveryAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "createQuest(string,bytes,address,uint256,address)"(
      _questTitle: string,
      _questDetailsRef: BytesLike,
      _rewardToken: string,
      _expireTime: BigNumberish,
      _fundsRecoveryAddress: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    deposit(overrides?: CallOverrides): Promise<BigNumber>;

    "deposit()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setDeposit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setDeposit(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    aragonGovernAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "aragonGovernAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createQuest(
      _questTitle: string,
      _questDetailsRef: BytesLike,
      _rewardToken: string,
      _expireTime: BigNumberish,
      _fundsRecoveryAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createQuest(string,bytes,address,uint256,address)"(
      _questTitle: string,
      _questDetailsRef: BytesLike,
      _rewardToken: string,
      _expireTime: BigNumberish,
      _fundsRecoveryAddress: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    deposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "deposit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setDeposit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setDeposit(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
