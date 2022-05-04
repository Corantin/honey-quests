/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { QuestFactory } from "../QuestFactory";

export class QuestFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _aragonGovernAddress: string,
    _depositToken: string,
    _depositAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<QuestFactory> {
    return super.deploy(
      _aragonGovernAddress,
      _depositToken,
      _depositAmount,
      overrides || {}
    ) as Promise<QuestFactory>;
  }
  getDeployTransaction(
    _aragonGovernAddress: string,
    _depositToken: string,
    _depositAmount: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _aragonGovernAddress,
      _depositToken,
      _depositAmount,
      overrides || {}
    );
  }
  attach(address: string): QuestFactory {
    return super.attach(address) as QuestFactory;
  }
  connect(signer: Signer): QuestFactory__factory {
    return super.connect(signer) as QuestFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): QuestFactory {
    return new Contract(address, _abi, signerOrProvider) as QuestFactory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_aragonGovernAddress",
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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DepositChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "questAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "questTitle",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "questDetailsRef",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rewardTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expireTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "creationTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fundsRecoveryAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "depositToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
    ],
    name: "QuestCreated",
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
        internalType: "address payable",
        name: "_fundsRecoveryAddress",
        type: "address",
      },
    ],
    name: "createQuest",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    name: "setDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620028e9380380620028e98339810160408190526200003491620001a0565b620000486200004262000078565b6200007c565b600180546001600160a01b0319166001600160a01b0385161790556200006f8282620000cc565b50505062000254565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000d662000078565b6001600160a01b0316620000e962000191565b6001600160a01b0316146200011b5760405162461bcd60e51b81526004016200011290620001e7565b60405180910390fd5b6040805180820182526001600160a01b0384168082526020909101839052600280546001600160a01b03191690911790556003829055517f556f88907cfe81bbd1433b2c2ba3860920f0b50b218c55ca0a060558e7ca41999062000185904290859085906200021c565b60405180910390a15050565b6000546001600160a01b031690565b600080600060608486031215620001b5578283fd5b8351620001c2816200023b565b6020850151909350620001d5816200023b565b80925050604084015190509250925092565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b9283526001600160a01b03919091166020830152604082015260600190565b6001600160a01b03811681146200025157600080fd5b50565b61268580620002646000396000f3fe60806040523480156200001157600080fd5b5060043610620000885760003560e01c8063b0a87ac11162000063578063b0a87ac114620000d2578063c6b21b0214620000dc578063d0e30db014620000f3578063f2fde38b146200010d5762000088565b8063715018a6146200008d5780638da5cb5b1462000099578063abec0a0314620000bb575b600080fd5b6200009762000124565b005b620000a3620001b5565b604051620000b2919062000cbc565b60405180910390f35b620000a3620000cc36600462000b77565b620001d1565b620000a36200032c565b62000097620000ed36600462000b49565b62000348565b620000fd6200045d565b604051620000b292919062000db4565b620000976200011e36600462000b08565b6200047f565b6200012e62000557565b73ffffffffffffffffffffffffffffffffffffffff166200014e620001b5565b73ffffffffffffffffffffffffffffffffffffffff1614620001a7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000f2c565b60405180910390fd5b620001b360006200055b565b565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b6040805180820190915260025473ffffffffffffffffffffffffffffffffffffffff16815260035460208201526000906200020d9033620005d0565b6001546002546003546040516000938a938a938a938a9373ffffffffffffffffffffffffffffffffffffffff908116938b9391169133906200024f9062000a52565b620002639998979695949392919062000def565b604051809103906000f08015801562000280573d6000803e3d6000fd5b506040805180820190915260025473ffffffffffffffffffffffffffffffffffffffff1681526003546020820152909150620002bd908262000701565b6002546003546040517f3423d8d80de75d9a7261c1498176b675f73f66ad27ce1f0c82651c59139235ac926200031a9285928c928c928c928c9242928d9273ffffffffffffffffffffffffffffffffffffffff9092169162000d35565b60405180910390a19695505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b6200035262000557565b73ffffffffffffffffffffffffffffffffffffffff1662000372620001b5565b73ffffffffffffffffffffffffffffffffffffffff1614620003c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000f2c565b60408051808201825273ffffffffffffffffffffffffffffffffffffffff84168082526020909101839052600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001690911790556003829055517f556f88907cfe81bbd1433b2c2ba3860920f0b50b218c55ca0a060558e7ca41999062000451904290859085906200102c565b60405180910390a15050565b60025460035473ffffffffffffffffffffffffffffffffffffffff9091169082565b6200048962000557565b73ffffffffffffffffffffffffffffffffffffffff16620004a9620001b5565b73ffffffffffffffffffffffffffffffffffffffff1614620004f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000f2c565b73ffffffffffffffffffffffffffffffffffffffff811662000549576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000e72565b62000554816200055b565b50565b3390565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b602082015115620006fd5781516040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff169063dd62ed3e9062000635908590309060040162000cdd565b60206040518083038186803b1580156200064e57600080fd5b505afa15801562000663573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000689919062000c39565b90508260200151811015620006cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000f61565b60208301518351620006fb9173ffffffffffffffffffffffffffffffffffffffff909116908490309062000739565b505b5050565b602082015115620006fd5760208201518251620006fd9173ffffffffffffffffffffffffffffffffffffffff909116908390620007e6565b620007e0846323b872dd60e01b8585856040516024016200075d9392919062000d04565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915262000808565b50505050565b620006fb8363a9059cbb60e01b84846040516024016200075d92919062000db4565b60006200086c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16620008c69092919063ffffffff16565b805190915015620006fb57808060200190518101906200088d919062000b27565b620006fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000fcf565b6060620008d78484600085620008e1565b90505b9392505050565b60608247101562000920576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000ecf565b6200092b85620009f0565b62000964576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000f98565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516200098f919062000c9e565b60006040518083038185875af1925050503d8060008114620009ce576040519150601f19603f3d011682016040523d82523d6000602084013e620009d3565b606091505b5091509150620009e5828286620009fa565b979650505050505050565b803b15155b919050565b6060831562000a0b575081620008da565b82511562000a1c5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e919062000dda565b61157680620010da83390190565b600067ffffffffffffffff8084111562000a7e5762000a7e62001087565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171562000ac75762000ac762001087565b8160405280935085815286868601111562000ae157600080fd5b858560208301376000602087830101525050509392505050565b8035620009f581620010b6565b60006020828403121562000b1a578081fd5b8135620008da81620010b6565b60006020828403121562000b39578081fd5b81518015158114620008da578182fd5b6000806040838503121562000b5c578081fd5b823562000b6981620010b6565b946020939093013593505050565b600080600080600060a0868803121562000b8f578081fd5b853567ffffffffffffffff8082111562000ba7578283fd5b818801915088601f83011262000bbb578283fd5b62000bcc8983356020850162000a60565b9650602088013591508082111562000be2578283fd5b508601601f8101881362000bf4578182fd5b62000c058882356020840162000a60565b94505062000c166040870162000afb565b92506060860135915062000c2d6080870162000afb565b90509295509295909350565b60006020828403121562000c4b578081fd5b5051919050565b6000815180845262000c6c81602086016020860162001058565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000825162000cb281846020870162001058565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b73ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b600061012073ffffffffffffffffffffffffffffffffffffffff808d16845281602085015262000d688285018d62000c52565b9150838203604085015262000d7e828c62000c52565b99811660608501526080840198909852505060a081019490945291841660c084015290921660e082015261010001529392505050565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060208252620008da602083018462000c52565b600061012080835262000e058184018d62000c52565b9050828103602084015262000e1b818c62000c52565b73ffffffffffffffffffffffffffffffffffffffff9a8b16604085015260608401999099525050948716608086015292861660a085015290851660c084015260e08301529092166101009092019190915292915050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601d908201527f4552524f52203a204465706f7369742062616420616c6c6f77616e6365000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b92835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b60005b83811015620010755781810151838201526020016200105b565b83811115620007e05750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff811681146200055457600080fdfe60806040523480156200001157600080fd5b506040516200157638038062001576833981016040819052620000349162000280565b8851620000499060019060208c0190620000f0565b5087516200005f9060029060208b0190620000f0565b50600380546001600160a01b03199081166001600160a01b03998a161790915560049690965560058054871695881695909517909455600680548616938716939093179092556000805485169386169390931790925560408051808201909152919093168082526020909101839052600880549092161790556009555050600a805460ff19166001179055620003c2565b828054620000fe906200036f565b90600052602060002090601f0160209004810192826200012257600085556200016d565b82601f106200013d57805160ff19168380011785556200016d565b828001600101855582156200016d579182015b828111156200016d57825182559160200191906001019062000150565b506200017b9291506200017f565b5090565b5b808211156200017b576000815560010162000180565b60006001600160401b0380841115620001b357620001b3620003ac565b604051601f8501601f19908116603f01168101908282118183101715620001de57620001de620003ac565b81604052809350858152868686011115620001f857600080fd5b600092505b858310156200021d578285015160208483010152602083019250620001fd565b8583111562000230576000602087830101525b5050509392505050565b80516001600160a01b03811681146200025257600080fd5b919050565b600082601f83011262000268578081fd5b620002798383516020850162000196565b9392505050565b60008060008060008060008060006101208a8c0312156200029f578485fd5b89516001600160401b0380821115620002b6578687fd5b818c0191508c601f830112620002ca578687fd5b620002db8d83516020850162000196565b9a5060208c0151915080821115620002f1578687fd5b50620003008c828d0162000257565b9850506200031160408b016200023a565b965060608a015195506200032860808b016200023a565b94506200033860a08b016200023a565b93506200034860c08b016200023a565b925060e08a01519150620003606101008b016200023a565b90509295985092959850929598565b6002810460018216806200038457607f821691505b60208210811415620003a657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6111a480620003d26000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063b434151c11610081578063e0c234231161005b578063e0c2342314610186578063f294cf381461019b578063f7c618c1146101a3576100d4565b8063b434151c14610148578063c6da86111461015b578063d0e30db014610170576100d4565b80637ceae310116100b25780637ceae31014610116578063a888c2cd1461011e578063b0a87ac114610140576100d4565b8063310a1ee3146100d95780634621d082146100f75780636c3a4cce14610101575b600080fd5b6100e16101ab565b6040516100ee91906110a1565b60405180910390f35b6100ff6101b1565b005b61010961032a565b6040516100ee9190610e0e565b610109610346565b61013161012c366004610d78565b610362565b6040516100ee93929190610e73565b61010961043b565b6100ff610156366004610c83565b610457565b61016361078b565b6040516100ee9190610e55565b610178610794565b6040516100ee929190610e2f565b61018e6107b6565b6040516100ee9190610e60565b61018e610844565b610109610851565b60045481565b60045442116101f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610f68565b60405180910390fd5b6000546040805180820190915260085473ffffffffffffffffffffffffffffffffffffffff90811682526009546020830152610231921661086d565b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556006546003546040517f70a082310000000000000000000000000000000000000000000000000000000081526103289273ffffffffffffffffffffffffffffffffffffffff9081169216906370a08231906102b8903090600401610e0e565b60206040518083038186803b1580156102d057600080fd5b505afa1580156102e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103089190610d90565b60035473ffffffffffffffffffffffffffffffffffffffff1691906108a6565b565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b6007818154811061037257600080fd5b9060005260206000209060030201600091509050806000018054610395906110da565b80601f01602080910402602001604051908101604052809291908181526020018280546103c1906110da565b801561040e5780601f106103e35761010080835404028352916020019161040e565b820191906000526020600020905b8154815290600101906020018083116103f157829003601f168201915b505050506001830154600290930154919273ffffffffffffffffffffffffffffffffffffffff1691905083565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b60055473ffffffffffffffffffffffffffffffffffffffff1633146104a8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610f9f565b83516104e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec9061100d565b6003546040517f70a0823100000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190610537903090600401610e0e565b60206040518083038186803b15801561054f57600080fd5b505afa158015610563573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105879190610d90565b905081156105d45760085460035473ffffffffffffffffffffffffffffffffffffffff908116911614156105d0576009546000906105c690839061094c565b94506105d4915050565b8092505b60085460035473ffffffffffffffffffffffffffffffffffffffff9081169116141561064a576000610606828561094c565b915050600860010154811015610648576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610eae565b505b8215610674576003546106749073ffffffffffffffffffffffffffffffffffffffff1685856108a6565b6040805160608101825286815273ffffffffffffffffffffffffffffffffffffffff86166020808301919091529181018590526007805460018101825560009190915281518051929360039092027fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801926106f29284920190610b9f565b5060208201516001820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055604091820151600290910155517fa1c3b325aa2c115e4b244062eba2515bc5585ae5b41556be8fef399ae9fde11b9061077c90879087908790610e73565b60405180910390a15050505050565b600a5460ff1681565b60085460095473ffffffffffffffffffffffffffffffffffffffff9091169082565b600280546107c3906110da565b80601f01602080910402602001604051908101604052809291908181526020018280546107ef906110da565b801561083c5780601f106108115761010080835404028352916020019161083c565b820191906000526020600020905b81548152906001019060200180831161081f57829003601f168201915b505050505081565b600180546107c3906110da565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b6020820151156108a257602082015182516108a29173ffffffffffffffffffffffffffffffffffffffff9091169083906108a6565b5050565b6109478363a9059cbb60e01b84846040516024016108c5929190610e2f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610972565b505050565b600080838311156109625750600090508061096b565b50600190508183035b9250929050565b60006109d4826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610a289092919063ffffffff16565b80519091501561094757808060200190518101906109f29190610c67565b610947576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90611044565b6060610a378484600085610a41565b90505b9392505050565b606082471015610a7d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610f0b565b610a8685610b42565b610abc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610fd6565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610ae59190610df2565b60006040518083038185875af1925050503d8060008114610b22576040519150601f19603f3d011682016040523d82523d6000602084013e610b27565b606091505b5091509150610b37828286610b4c565b979650505050505050565b803b15155b919050565b60608315610b5b575081610a3a565b825115610b6b5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec9190610e60565b828054610bab906110da565b90600052602060002090601f016020900481019282610bcd5760008555610c13565b82601f10610be657805160ff1916838001178555610c13565b82800160010185558215610c13579182015b82811115610c13578251825591602001919060010190610bf8565b50610c1f929150610c23565b5090565b5b80821115610c1f5760008155600101610c24565b803573ffffffffffffffffffffffffffffffffffffffff81168114610b4757600080fd5b8035610b478161115d565b600060208284031215610c78578081fd5b8151610a3a8161115d565b60008060008060808587031215610c98578283fd5b843567ffffffffffffffff80821115610caf578485fd5b818701915087601f830112610cc2578485fd5b813581811115610cd457610cd461112e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610d1a57610d1a61112e565b816040528281528a6020848701011115610d32578788fd5b8260208601602083013787602084830101528098505050505050610d5860208601610c38565b925060408501359150610d6d60608601610c5c565b905092959194509250565b600060208284031215610d89578081fd5b5035919050565b600060208284031215610da1578081fd5b5051919050565b60008151808452610dc08160208601602086016110aa565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60008251610e048184602087016110aa565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b901515815260200190565b600060208252610a3a6020830184610da8565b600060608252610e866060830186610da8565b73ffffffffffffffffffffffffffffffffffffffff9490941660208301525060400152919050565b60208082526027908201527f4552524f523a2053686f756c64206e6f742065786365656420616c6c6f77656460408201527f20626f756e747900000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b60208082526012908201527f4552524f523a204e6f7420657870697265640000000000000000000000000000604082015260600190565b60208082526018908201527f4552524f523a2053656e646572206e6f7420676f7665726e0000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b60208082526012908201527f4552524f523a204e6f2065766964656e63650000000000000000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60005b838110156110c55781810151838201526020016110ad565b838111156110d4576000848401525b50505050565b6002810460018216806110ee57607f821691505b60208210811415611128577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b801515811461116b57600080fd5b5056fea2646970667358221220c84dfbfaa671f8e9a27f44807bba7d814fb503765aa088da676349afea12a84964736f6c63430008010033a264697066735822122018b5cfdf38e2dd632d88f5be1a8a5d5a8637839ee704b717284316db3f2d6a6764736f6c63430008010033";
