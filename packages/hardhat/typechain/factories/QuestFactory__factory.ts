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
  "0x60806040523480156200001157600080fd5b50604051620028a4380380620028a48339810160408190526200003491620001a0565b620000486200004262000078565b6200007c565b600180546001600160a01b0319166001600160a01b0385161790556200006f8282620000cc565b50505062000254565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000d662000078565b6001600160a01b0316620000e962000191565b6001600160a01b0316146200011b5760405162461bcd60e51b81526004016200011290620001e7565b60405180910390fd5b6040805180820182526001600160a01b0384168082526020909101839052600280546001600160a01b03191690911790556003829055517f556f88907cfe81bbd1433b2c2ba3860920f0b50b218c55ca0a060558e7ca41999062000185904290859085906200021c565b60405180910390a15050565b6000546001600160a01b031690565b600080600060608486031215620001b5578283fd5b8351620001c2816200023b565b6020850151909350620001d5816200023b565b80925050604084015190509250925092565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b9283526001600160a01b03919091166020830152604082015260600190565b6001600160a01b03811681146200025157600080fd5b50565b61264080620002646000396000f3fe60806040523480156200001157600080fd5b5060043610620000885760003560e01c8063b0a87ac11162000063578063b0a87ac114620000d2578063c6b21b0214620000dc578063d0e30db014620000f3578063f2fde38b146200010d5762000088565b8063715018a6146200008d5780638da5cb5b1462000099578063abec0a0314620000bb575b600080fd5b6200009762000124565b005b620000a3620001b5565b604051620000b2919062000c8b565b60405180910390f35b620000a3620000cc36600462000b5f565b620001d1565b620000a36200032b565b62000097620000ed36600462000b31565b62000347565b620000fd6200045c565b604051620000b292919062000d52565b620000976200011e36600462000af0565b6200047e565b6200012e62000556565b73ffffffffffffffffffffffffffffffffffffffff166200014e620001b5565b73ffffffffffffffffffffffffffffffffffffffff1614620001a7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000eca565b60405180910390fd5b620001b360006200055a565b565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b60015460025460035460405160009384938a938a938a938a9373ffffffffffffffffffffffffffffffffffffffff918216938b9392909116913390620002179062000a3a565b6200022b9998979695949392919062000d8d565b604051809103906000f08015801562000248573d6000803e3d6000fd5b506040805180820190915260025473ffffffffffffffffffffffffffffffffffffffff1681526003546020820152909150620002859033620005cf565b6040805180820190915260025473ffffffffffffffffffffffffffffffffffffffff1681526003546020820152620002be90826200067d565b6002546003546040517feffb3706903faabbb87bd2995a8f8453090de909495ef3192e27019ff21856f992620003199285928c928c928c928c92429273ffffffffffffffffffffffffffffffffffffffff9091169162000cdd565b60405180910390a19695505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b6200035162000556565b73ffffffffffffffffffffffffffffffffffffffff1662000371620001b5565b73ffffffffffffffffffffffffffffffffffffffff1614620003c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000eca565b60408051808201825273ffffffffffffffffffffffffffffffffffffffff84168082526020909101839052600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001690911790556003829055517f556f88907cfe81bbd1433b2c2ba3860920f0b50b218c55ca0a060558e7ca419990620004509042908590859062000f9c565b60405180910390a15050565b60025460035473ffffffffffffffffffffffffffffffffffffffff9091169082565b6200048862000556565b73ffffffffffffffffffffffffffffffffffffffff16620004a8620001b5565b73ffffffffffffffffffffffffffffffffffffffff1614620004f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000eca565b73ffffffffffffffffffffffffffffffffffffffff811662000548576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000e10565b62000553816200055a565b50565b3390565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b602082015115620006795760208201518251620006099173ffffffffffffffffffffffffffffffffffffffff90911690839030906200071c565b8073ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff167fec36c0364d931187a76cf66d7eee08fad0ec2e8b7458a8d8b26b36769d4d13f3846020015160405162000670919062000f93565b60405180910390a35b5050565b602082015115620006795760208201518251620006b59173ffffffffffffffffffffffffffffffffffffffff909116908390620007c9565b8073ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff167fc1c90b8e0705b212262c0dbd7580efe1862c2f185bf96899226f7596beb2db09846020015160405162000670919062000f93565b620007c3846323b872dd60e01b858585604051602401620007409392919062000cac565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152620007f0565b50505050565b620007eb8363a9059cbb60e01b84846040516024016200074092919062000d52565b505050565b600062000854826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16620008ae9092919063ffffffff16565b805190915015620007eb578080602001905181019062000875919062000b0f565b620007eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000f36565b6060620008bf8484600085620008c9565b90505b9392505050565b60608247101562000908576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000e6d565b6200091385620009d8565b6200094c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000eff565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405162000977919062000c6d565b60006040518083038185875af1925050503d8060008114620009b6576040519150601f19603f3d011682016040523d82523d6000602084013e620009bb565b606091505b5091509150620009cd828286620009e2565b979650505050505050565b803b15155b919050565b60608315620009f3575081620008c2565b82511562000a045782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e919062000d78565b6115c1806200104a83390190565b600067ffffffffffffffff8084111562000a665762000a6662000ff7565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171562000aaf5762000aaf62000ff7565b8160405280935085815286868601111562000ac957600080fd5b858560208301376000602087830101525050509392505050565b8035620009dd8162001026565b60006020828403121562000b02578081fd5b8135620008c28162001026565b60006020828403121562000b21578081fd5b81518015158114620008c2578182fd5b6000806040838503121562000b44578081fd5b823562000b518162001026565b946020939093013593505050565b600080600080600060a0868803121562000b77578081fd5b853567ffffffffffffffff8082111562000b8f578283fd5b818801915088601f83011262000ba3578283fd5b62000bb48983356020850162000a48565b9650602088013591508082111562000bca578283fd5b508601601f8101881362000bdc578182fd5b62000bed8882356020840162000a48565b94505062000bfe6040870162000ae3565b92506060860135915062000c156080870162000ae3565b90509295509295909350565b6000815180845262000c3b81602086016020860162000fc8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000825162000c8181846020870162000fc8565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b600061010073ffffffffffffffffffffffffffffffffffffffff808c16845281602085015262000d108285018c62000c21565b9150838203604085015262000d26828b62000c21565b98811660608501526080840197909752505060a0810193909352921660c082015260e001529392505050565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060208252620008c2602083018462000c21565b600061012080835262000da38184018d62000c21565b9050828103602084015262000db9818c62000c21565b73ffffffffffffffffffffffffffffffffffffffff9a8b16604085015260608401999099525050948716608086015292861660a085015290851660c084015260e08301529092166101009092019190915292915050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b92835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b60005b8381101562000fe557818101518382015260200162000fcb565b83811115620007c35750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff811681146200055357600080fdfe60806040523480156200001157600080fd5b50604051620015c1380380620015c1833981016040819052620000349162000285565b8851620000499060029060208c0190620000f5565b5087516200005f9060039060208b0190620000f5565b50600480546001600160a01b03199081166001600160a01b03998a1617909155600596909655600680548716958816959095179094556007805486169387169390931790925560018054851693861693909317909255604080518082019091529190931680825260209091018390526009805483169091179055600a919091556000805433921691909117905550620003c79050565b828054620001039062000374565b90600052602060002090601f01602090048101928262000127576000855562000172565b82601f106200014257805160ff191683800117855562000172565b8280016001018555821562000172579182015b828111156200017257825182559160200191906001019062000155565b506200018092915062000184565b5090565b5b8082111562000180576000815560010162000185565b60006001600160401b0380841115620001b857620001b8620003b1565b604051601f8501601f19908116603f01168101908282118183101715620001e357620001e3620003b1565b81604052809350858152868686011115620001fd57600080fd5b600092505b858310156200022257828501516020848301015260208301925062000202565b8583111562000235576000602087830101525b5050509392505050565b80516001600160a01b03811681146200025757600080fd5b919050565b600082601f8301126200026d578081fd5b6200027e838351602085016200019b565b9392505050565b60008060008060008060008060006101208a8c031215620002a4578485fd5b89516001600160401b0380821115620002bb578687fd5b818c0191508c601f830112620002cf578687fd5b620002e08d8351602085016200019b565b9a5060208c0151915080821115620002f6578687fd5b50620003058c828d016200025c565b9850506200031660408b016200023f565b965060608a015195506200032d60808b016200023f565b94506200033d60a08b016200023f565b93506200034d60c08b016200023f565b925060e08a01519150620003656101008b016200023f565b90509295985092959850929598565b6002810460018216806200038957607f821691505b60208210811415620003ab57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6111ea80620003d76000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063b434151c11610081578063e0c234231161005b578063e0c2342314610179578063f294cf381461018e578063f7c618c114610196576100d4565b8063b434151c14610148578063c45a01551461015b578063d0e30db014610163576100d4565b80637ceae310116100b25780637ceae31014610116578063a888c2cd1461011e578063b0a87ac114610140576100d4565b8063310a1ee3146100d95780634621d082146100f75780636c3a4cce14610101575b600080fd5b6100e161019e565b6040516100ee91906110ab565b60405180910390f35b6100ff6101a4565b005b6101096102f5565b6040516100ee9190610e23565b610109610311565b61013161012c366004610d8d565b61032d565b6040516100ee93929190610e7d565b610109610406565b6100ff610156366004610c98565b610422565b610109610745565b61016b610761565b6040516100ee929190610e44565b610181610783565b6040516100ee9190610e6a565b610181610811565b61010961081e565b60055481565b60055442116101e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101df90610f72565b60405180910390fd5b6001546040805180820190915260095473ffffffffffffffffffffffffffffffffffffffff9081168252600a546020830152610224921661083a565b600754600480546040517f70a082310000000000000000000000000000000000000000000000000000000081526102f39373ffffffffffffffffffffffffffffffffffffffff908116939216916370a082319161028391309101610e23565b60206040518083038186803b15801561029b57600080fd5b505afa1580156102af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d39190610da5565b60045473ffffffffffffffffffffffffffffffffffffffff1691906108e1565b565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60075473ffffffffffffffffffffffffffffffffffffffff1681565b6008818154811061033d57600080fd5b906000526020600020906003020160009150905080600001805461036090611120565b80601f016020809104026020016040519081016040528092919081815260200182805461038c90611120565b80156103d95780601f106103ae576101008083540402835291602001916103d9565b820191906000526020600020905b8154815290600101906020018083116103bc57829003601f168201915b505050506001830154600290930154919273ffffffffffffffffffffffffffffffffffffffff1691905083565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b60065473ffffffffffffffffffffffffffffffffffffffff163314610473576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101df90610fa9565b83516104ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101df90611017565b600480546040517f70a0823100000000000000000000000000000000000000000000000000000000815260009273ffffffffffffffffffffffffffffffffffffffff909216916370a082319161050391309101610e23565b60206040518083038186803b15801561051b57600080fd5b505afa15801561052f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105539190610da5565b905081156105995760095460045473ffffffffffffffffffffffffffffffffffffffff9081169116141561059557600a5461058e90826110b4565b9250610599565b8092505b60095460045473ffffffffffffffffffffffffffffffffffffffff9081169116141561060457600a546105cc84836110b4565b1015610604576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101df90610eb8565b821561062e5760045461062e9073ffffffffffffffffffffffffffffffffffffffff1685856108e1565b6040805160608101825286815273ffffffffffffffffffffffffffffffffffffffff86166020808301919091529181018590526008805460018101825560009190915281518051929360039092027ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee301926106ac9284920190610bb4565b5060208201516001820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055604091820151600290910155517fa1c3b325aa2c115e4b244062eba2515bc5585ae5b41556be8fef399ae9fde11b9061073690879087908790610e7d565b60405180910390a15050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600954600a5473ffffffffffffffffffffffffffffffffffffffff9091169082565b6003805461079090611120565b80601f01602080910402602001604051908101604052809291908181526020018280546107bc90611120565b80156108095780601f106107de57610100808354040283529160200191610809565b820191906000526020600020905b8154815290600101906020018083116107ec57829003601f168201915b505050505081565b6002805461079090611120565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b6020820151156108dd576020820151825161086f9173ffffffffffffffffffffffffffffffffffffffff9091169083906108e1565b8073ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff167fc1c90b8e0705b212262c0dbd7580efe1862c2f185bf96899226f7596beb2db0984602001516040516108d491906110ab565b60405180910390a35b5050565b6109828363a9059cbb60e01b8484604051602401610900929190610e44565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610987565b505050565b60006109e9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610a3d9092919063ffffffff16565b8051909150156109825780806020019051810190610a079190610c7c565b610982576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101df9061104e565b6060610a4c8484600085610a56565b90505b9392505050565b606082471015610a92576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101df90610f15565b610a9b85610b57565b610ad1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101df90610fe0565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610afa9190610e07565b60006040518083038185875af1925050503d8060008114610b37576040519150601f19603f3d011682016040523d82523d6000602084013e610b3c565b606091505b5091509150610b4c828286610b61565b979650505050505050565b803b15155b919050565b60608315610b70575081610a4f565b825115610b805782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101df9190610e6a565b828054610bc090611120565b90600052602060002090601f016020900481019282610be25760008555610c28565b82601f10610bfb57805160ff1916838001178555610c28565b82800160010185558215610c28579182015b82811115610c28578251825591602001919060010190610c0d565b50610c34929150610c38565b5090565b5b80821115610c345760008155600101610c39565b803573ffffffffffffffffffffffffffffffffffffffff81168114610b5c57600080fd5b8035610b5c816111a3565b600060208284031215610c8d578081fd5b8151610a4f816111a3565b60008060008060808587031215610cad578283fd5b843567ffffffffffffffff80821115610cc4578485fd5b818701915087601f830112610cd7578485fd5b813581811115610ce957610ce9611174565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610d2f57610d2f611174565b816040528281528a6020848701011115610d47578788fd5b8260208601602083013787602084830101528098505050505050610d6d60208601610c4d565b925060408501359150610d8260608601610c71565b905092959194509250565b600060208284031215610d9e578081fd5b5035919050565b600060208284031215610db6578081fd5b5051919050565b60008151808452610dd58160208601602086016110f0565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60008251610e198184602087016110f0565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060208252610a4f6020830184610dbd565b600060608252610e906060830186610dbd565b73ffffffffffffffffffffffffffffffffffffffff9490941660208301525060400152919050565b60208082526027908201527f4552524f523a2053686f756c64206e6f742065786365656420616c6c6f77656460408201527f20626f756e747900000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b60208082526012908201527f4552524f523a204e6f7420657870697265640000000000000000000000000000604082015260600190565b60208082526018908201527f4552524f523a2053656e646572206e6f7420676f7665726e0000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b60208082526012908201527f4552524f523a204e6f2065766964656e63650000000000000000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b6000828210156110eb577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b500390565b60005b8381101561110b5781810151838201526020016110f3565b8381111561111a576000848401525b50505050565b60028104600182168061113457607f821691505b6020821081141561116e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b80151581146111b157600080fd5b5056fea264697066735822122075081c8d9121fb6e9a03687b41c08597821c7225a29cd2b73aa9ce8fe6c5341164736f6c63430008010033a2646970667358221220703abd29c8743eda4767b2760c55a6f1f6b53081fbfe8bcd500e7d99f4dcd71664736f6c63430008010033";
