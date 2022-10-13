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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ModelsInterface extends ethers.utils.Interface {
  functions: {
    "c_0x7b648bec(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "c_0x7b648bec",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "c_0x7b648bec",
    data: BytesLike
  ): Result;

  events: {};
}

export class Models extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ModelsInterface;

  functions: {
    c_0x7b648bec(
      c__0x7b648bec: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "c_0x7b648bec(bytes32)"(
      c__0x7b648bec: BytesLike,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  c_0x7b648bec(
    c__0x7b648bec: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  "c_0x7b648bec(bytes32)"(
    c__0x7b648bec: BytesLike,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    c_0x7b648bec(
      c__0x7b648bec: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "c_0x7b648bec(bytes32)"(
      c__0x7b648bec: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    c_0x7b648bec(
      c__0x7b648bec: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "c_0x7b648bec(bytes32)"(
      c__0x7b648bec: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    c_0x7b648bec(
      c__0x7b648bec: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "c_0x7b648bec(bytes32)"(
      c__0x7b648bec: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
