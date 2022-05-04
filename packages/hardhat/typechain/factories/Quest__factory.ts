/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BytesLike, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Quest } from "../Quest";

export class Quest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _questTitle: string,
    _questDetailsRef: BytesLike,
    _rewardToken: string,
    _expireTime: BigNumberish,
    _aragonGovernAddress: string,
    _fundsRecoveryAddress: string,
    _depositToken: string,
    _depositAmount: BigNumberish,
    _questCreator: string,
    overrides?: Overrides
  ): Promise<Quest> {
    return super.deploy(
      _questTitle,
      _questDetailsRef,
      _rewardToken,
      _expireTime,
      _aragonGovernAddress,
      _fundsRecoveryAddress,
      _depositToken,
      _depositAmount,
      _questCreator,
      overrides || {}
    ) as Promise<Quest>;
  }
  getDeployTransaction(
    _questTitle: string,
    _questDetailsRef: BytesLike,
    _rewardToken: string,
    _expireTime: BigNumberish,
    _aragonGovernAddress: string,
    _fundsRecoveryAddress: string,
    _depositToken: string,
    _depositAmount: BigNumberish,
    _questCreator: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _questTitle,
      _questDetailsRef,
      _rewardToken,
      _expireTime,
      _aragonGovernAddress,
      _fundsRecoveryAddress,
      _depositToken,
      _depositAmount,
      _questCreator,
      overrides || {}
    );
  }
  attach(address: string): Quest {
    return super.attach(address) as Quest;
  }
  connect(signer: Signer): Quest__factory {
    return super.connect(signer) as Quest__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Quest {
    return new Contract(address, _abi, signerOrProvider) as Quest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_questTitle",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "_questDetailsRef",
        type: "bytes",
      },
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_expireTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_aragonGovernAddress",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_fundsRecoveryAddress",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_depositToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_depositAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_questCreator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "evidence",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "QuestClaimed",
    type: "event",
  },
  {
    inputs: [],
    name: "aragonGovernAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_evidence",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_player",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_claimAll",
        type: "bool",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claims",
    outputs: [
      {
        internalType: "bytes",
        name: "evidence",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositHeld",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "expireTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fundsRecoveryAddress",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "questCreator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "questDetailsRef",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "questTitle",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recoverUnclaimedFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200157638038062001576833981016040819052620000349162000280565b8851620000499060019060208c0190620000f0565b5087516200005f9060029060208b0190620000f0565b50600380546001600160a01b03199081166001600160a01b03998a161790915560049690965560058054871695881695909517909455600680548616938716939093179092556000805485169386169390931790925560408051808201909152919093168082526020909101839052600880549092161790556009555050600a805460ff19166001179055620003c2565b828054620000fe906200036f565b90600052602060002090601f0160209004810192826200012257600085556200016d565b82601f106200013d57805160ff19168380011785556200016d565b828001600101855582156200016d579182015b828111156200016d57825182559160200191906001019062000150565b506200017b9291506200017f565b5090565b5b808211156200017b576000815560010162000180565b60006001600160401b0380841115620001b357620001b3620003ac565b604051601f8501601f19908116603f01168101908282118183101715620001de57620001de620003ac565b81604052809350858152868686011115620001f857600080fd5b600092505b858310156200021d578285015160208483010152602083019250620001fd565b8583111562000230576000602087830101525b5050509392505050565b80516001600160a01b03811681146200025257600080fd5b919050565b600082601f83011262000268578081fd5b620002798383516020850162000196565b9392505050565b60008060008060008060008060006101208a8c0312156200029f578485fd5b89516001600160401b0380821115620002b6578687fd5b818c0191508c601f830112620002ca578687fd5b620002db8d83516020850162000196565b9a5060208c0151915080821115620002f1578687fd5b50620003008c828d0162000257565b9850506200031160408b016200023a565b965060608a015195506200032860808b016200023a565b94506200033860a08b016200023a565b93506200034860c08b016200023a565b925060e08a01519150620003606101008b016200023a565b90509295985092959850929598565b6002810460018216806200038457607f821691505b60208210811415620003a657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6111a480620003d26000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063b434151c11610081578063e0c234231161005b578063e0c2342314610186578063f294cf381461019b578063f7c618c1146101a3576100d4565b8063b434151c14610148578063c6da86111461015b578063d0e30db014610170576100d4565b80637ceae310116100b25780637ceae31014610116578063a888c2cd1461011e578063b0a87ac114610140576100d4565b8063310a1ee3146100d95780634621d082146100f75780636c3a4cce14610101575b600080fd5b6100e16101ab565b6040516100ee91906110a1565b60405180910390f35b6100ff6101b1565b005b61010961032a565b6040516100ee9190610e0e565b610109610346565b61013161012c366004610d78565b610362565b6040516100ee93929190610e73565b61010961043b565b6100ff610156366004610c83565b610457565b61016361078b565b6040516100ee9190610e55565b610178610794565b6040516100ee929190610e2f565b61018e6107b6565b6040516100ee9190610e60565b61018e610844565b610109610851565b60045481565b60045442116101f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610f68565b60405180910390fd5b6000546040805180820190915260085473ffffffffffffffffffffffffffffffffffffffff90811682526009546020830152610231921661086d565b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556006546003546040517f70a082310000000000000000000000000000000000000000000000000000000081526103289273ffffffffffffffffffffffffffffffffffffffff9081169216906370a08231906102b8903090600401610e0e565b60206040518083038186803b1580156102d057600080fd5b505afa1580156102e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103089190610d90565b60035473ffffffffffffffffffffffffffffffffffffffff1691906108a6565b565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b6007818154811061037257600080fd5b9060005260206000209060030201600091509050806000018054610395906110da565b80601f01602080910402602001604051908101604052809291908181526020018280546103c1906110da565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b505050506001830154600290930154919273ffffffffffffffffffffffffffffffffffffffff1691905083565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b60055473ffffffffffffffffffffffffffffffffffffffff1633146104a8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610f9f565b83516104e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec9061100d565b6003546040517f70a0823100000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190610537903090600401610e0e565b60206040518083038186803b15801561054f57600080fd5b505afa158015610563573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105879190610d90565b905081156105d45760085460035473ffffffffffffffffffffffffffffffffffffffff908116911614156105d0576009546000906105c690839061094c565b94506105d4915050565b8092505b60085460035473ffffffffffffffffffffffffffffffffffffffff9081169116141561064a576000610606828561094c565b915050600860010154811015610648576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610eae565b505b8215610674576003546106749073ffffffffffffffffffffffffffffffffffffffff1685856108a6565b6040805160608101825286815273ffffffffffffffffffffffffffffffffffffffff86166020808301919091529181018590526007805460018101825560009190915281518051929360039092027fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801926106f29284920190610b9f565b5060208201516001820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055604091820151600290910155517fa1c3b325aa2c115e4b244062eba2515bc5585ae5b41556be8fef399ae9fde11b9061077c90879087908790610e73565b60405180910390a15050505050565b600a5460ff1681565b60085460095473ffffffffffffffffffffffffffffffffffffffff9091169082565b600280546107c3906110da565b80601f01602080910402602001604051908101604052809291908181526020018280546107ef906110da565b801561083c5780601f106108115761010080835404028352916020019161083c565b820191906000526020600020905b81548152906001019060200180831161081f57829003601f168201915b505050505081565b600180546107c3906110da565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b6020820151156108a257602082015182516108a29173ffffffffffffffffffffffffffffffffffffffff9091169083906108a6565b5050565b6109478363a9059cbb60e01b84846040516024016108c5929190610e2f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610972565b505050565b600080838311156109625750600090508061096b565b50600190508183035b9250929050565b60006109d4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610a289092919063ffffffff16565b80519091501561094757808060200190518101906109f29190610c67565b610947576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90611044565b6060610a378484600085610a41565b90505b9392505050565b606082471015610a7d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610f0b565b610a8685610b42565b610abc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610fd6565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610ae59190610df2565b60006040518083038185875af1925050503d8060008114610b22576040519150601f19603f3d011682016040523d82523d6000602084013e610b27565b606091505b5091509150610b37828286610b4c565b979650505050505050565b803b15155b919050565b60608315610b5b575081610a3a565b825115610b6b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec9190610e60565b828054610bab906110da565b90600052602060002090601f016020900481019282610bcd5760008555610c13565b82601f10610be657805160ff1916838001178555610c13565b82800160010185558215610c13579182015b82811115610c13578251825591602001919060010190610bf8565b50610c1f929150610c23565b5090565b5b80821115610c1f5760008155600101610c24565b803573ffffffffffffffffffffffffffffffffffffffff81168114610b4757600080fd5b8035610b478161115d565b600060208284031215610c78578081fd5b8151610a3a8161115d565b60008060008060808587031215610c98578283fd5b843567ffffffffffffffff80821115610caf578485fd5b818701915087601f830112610cc2578485fd5b813581811115610cd457610cd461112e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610d1a57610d1a61112e565b816040528281528a6020848701011115610d32578788fd5b8260208601602083013787602084830101528098505050505050610d5860208601610c38565b925060408501359150610d6d60608601610c5c565b905092959194509250565b600060208284031215610d89578081fd5b5035919050565b600060208284031215610da1578081fd5b5051919050565b60008151808452610dc08160208601602086016110aa565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60008251610e048184602087016110aa565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b901515815260200190565b600060208252610a3a6020830184610da8565b600060608252610e866060830186610da8565b73ffffffffffffffffffffffffffffffffffffffff9490941660208301525060400152919050565b60208082526027908201527f4552524f523a2053686f756c64206e6f742065786365656420616c6c6f77656460408201527f20626f756e747900000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b60208082526012908201527f4552524f523a204e6f7420657870697265640000000000000000000000000000604082015260600190565b60208082526018908201527f4552524f523a2053656e646572206e6f7420676f7665726e0000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b60208082526012908201527f4552524f523a204e6f2065766964656e63650000000000000000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60005b838110156110c55781810151838201526020016110ad565b838111156110d4576000848401525b50505050565b6002810460018216806110ee57607f821691505b60208210811415611128577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b801515811461116b57600080fd5b5056fea2646970667358221220c84dfbfaa671f8e9a27f44807bba7d814fb503765aa088da676349afea12a84964736f6c63430008010033";
