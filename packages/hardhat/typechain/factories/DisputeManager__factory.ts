/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DisputeManager } from "../DisputeManager";

export class DisputeManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    mockCelesteAddress: string,
    overrides?: Overrides
  ): Promise<DisputeManager> {
    return super.deploy(
      mockCelesteAddress,
      overrides || {}
    ) as Promise<DisputeManager>;
  }
  getDeployTransaction(
    mockCelesteAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(mockCelesteAddress, overrides || {});
  }
  attach(address: string): DisputeManager {
    return super.attach(address) as DisputeManager;
  }
  connect(signer: Signer): DisputeManager__factory {
    return super.connect(signer) as DisputeManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DisputeManager {
    return new Contract(address, _abi, signerOrProvider) as DisputeManager;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "getDisputeFees",
    outputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_disputeId",
        type: "uint256",
      },
    ],
    name: "getDispute",
    outputs: [
      {
        name: "subject",
        type: "address",
      },
      {
        name: "possibleRulings",
        type: "uint8",
      },
      {
        name: "state",
        type: "uint8",
      },
      {
        name: "finalRuling",
        type: "uint8",
      },
      {
        name: "lastRoundId",
        type: "uint256",
      },
      {
        name: "createTermId",
        type: "uint64",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "mockCelesteAddress",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516020806103cb8339810180604052602081101561003057600080fd5b8101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061033a806100916000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80637b751b9e1461003b578063e3a96cbd1461008c575b600080fd5b61004361014b565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b6100b8600480360360208110156100a257600080fd5b810190808035906020019092919050505061021c565b604051808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018660ff1660ff16815260200185600481111561010657fe5b60ff1681526020018460ff1660ff1681526020018381526020018267ffffffffffffffff1667ffffffffffffffff168152602001965050505050505060405180910390f35b60008060008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637b751b9e6040518163ffffffff1660e01b815260040160606040518083038186803b1580156101ba57600080fd5b505afa1580156101ce573d6000803e3d6000fd5b505050506040513d60608110156101e457600080fd5b810190808051906020019092919080519060200190929190805190602001909291905050509250925092508181945094505050509091565b6000806000806000806000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663564a565d8a6040518263ffffffff1660e01b815260040180828152602001915050604080518083038186803b15801561029957600080fd5b505afa1580156102ad573d6000803e3d6000fd5b505050506040513d60408110156102c357600080fd5b8101908080519060200190929190805190602001909291905050509150915081600082600080600084945082925081915080905097509750975097509750975050509193955091939556fea165627a7a72305820565a683f33015a30b0ddaff15ba6311e738bf29ed720ecf89f34641d3b42d5120029";
