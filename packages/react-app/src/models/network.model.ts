import { TokenModel } from './token.model';

export type NetworkModel = {
  chainId: number;
  name: string;
  type: string;
  explorerBase: string;
  defaultEthNode: string;
  questsSubgraph: string;
  governSubgraph: string;
  celesteSubgraph: string;
  questFactoryAddress: string;
  governAddress: string;
  governQueueAddress: string;
  celesteAddress: string;
  defaultToken: TokenModel;
  nativeToken: TokenModel;
  stableToken: TokenModel;
  ensRegistry?: string;
  isTestNetwork: boolean;
  defaultGazFees: {
    gasLimit: number;
    gasPrice: number;
  };
};
