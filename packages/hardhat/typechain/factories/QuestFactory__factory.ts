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
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
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
  "0x60806040523480156200001157600080fd5b5060405162002901380380620029018339810160408190526200003491620001a0565b620000486200004262000078565b6200007c565b600180546001600160a01b0319166001600160a01b0385161790556200006f8282620000cc565b50505062000254565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620000d662000078565b6001600160a01b0316620000e962000191565b6001600160a01b0316146200011b5760405162461bcd60e51b81526004016200011290620001e7565b60405180910390fd5b6040805180820182526001600160a01b0384168082526020909101839052600280546001600160a01b03191690911790556003829055517f556f88907cfe81bbd1433b2c2ba3860920f0b50b218c55ca0a060558e7ca41999062000185904290859085906200021c565b60405180910390a15050565b6000546001600160a01b031690565b600080600060608486031215620001b5578283fd5b8351620001c2816200023b565b6020850151909350620001d5816200023b565b80925050604084015190509250925092565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b9283526001600160a01b03919091166020830152604082015260600190565b6001600160a01b03811681146200025157600080fd5b50565b61269d80620002646000396000f3fe60806040523480156200001157600080fd5b5060043610620000885760003560e01c8063b0a87ac11162000063578063b0a87ac114620000d2578063c6b21b0214620000dc578063d0e30db014620000f3578063f2fde38b146200010d5762000088565b8063715018a6146200008d5780638da5cb5b1462000099578063abec0a0314620000bb575b600080fd5b6200009762000124565b005b620000a3620001b5565b604051620000b2919062000cbe565b60405180910390f35b620000a3620000cc36600462000b79565b620001d1565b620000a36200032e565b62000097620000ed36600462000b4b565b6200034a565b620000fd6200045f565b604051620000b292919062000dc1565b620000976200011e36600462000b0a565b62000481565b6200012e62000559565b73ffffffffffffffffffffffffffffffffffffffff166200014e620001b5565b73ffffffffffffffffffffffffffffffffffffffff1614620001a7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000f39565b60405180910390fd5b620001b360006200055d565b565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b6040805180820190915260025473ffffffffffffffffffffffffffffffffffffffff16815260035460208201526000906200020d9033620005d2565b6001546002546003546040516000938a938a938a938a9373ffffffffffffffffffffffffffffffffffffffff908116938b9391169133906200024f9062000a54565b620002639998979695949392919062000dfc565b604051809103906000f08015801562000280573d6000803e3d6000fd5b506040805180820190915260025473ffffffffffffffffffffffffffffffffffffffff1681526003546020820152909150620002bd908262000703565b6002546003546040517fca7d9986f773401aa28b42476b2c2e635ff4ef099a2f9ce2c9bae92a146c5344926200031c9285928c928c928c928c9242928d9273ffffffffffffffffffffffffffffffffffffffff90921691339062000d37565b60405180910390a19695505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b6200035462000559565b73ffffffffffffffffffffffffffffffffffffffff1662000374620001b5565b73ffffffffffffffffffffffffffffffffffffffff1614620003c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000f39565b60408051808201825273ffffffffffffffffffffffffffffffffffffffff84168082526020909101839052600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001690911790556003829055517f556f88907cfe81bbd1433b2c2ba3860920f0b50b218c55ca0a060558e7ca419990620004539042908590859062001039565b60405180910390a15050565b60025460035473ffffffffffffffffffffffffffffffffffffffff9091169082565b6200048b62000559565b73ffffffffffffffffffffffffffffffffffffffff16620004ab620001b5565b73ffffffffffffffffffffffffffffffffffffffff1614620004fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000f39565b73ffffffffffffffffffffffffffffffffffffffff81166200054b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000e7f565b62000556816200055d565b50565b3390565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b602082015115620006ff5781516040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff169063dd62ed3e9062000637908590309060040162000cdf565b60206040518083038186803b1580156200065057600080fd5b505afa15801562000665573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200068b919062000c3b565b90508260200151811015620006ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000f6e565b60208301518351620006fd9173ffffffffffffffffffffffffffffffffffffffff90911690849030906200073b565b505b5050565b602082015115620006ff5760208201518251620006ff9173ffffffffffffffffffffffffffffffffffffffff909116908390620007e8565b620007e2846323b872dd60e01b8585856040516024016200075f9392919062000d06565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526200080a565b50505050565b620006fd8363a9059cbb60e01b84846040516024016200075f92919062000dc1565b60006200086e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16620008c89092919063ffffffff16565b805190915015620006fd57808060200190518101906200088f919062000b29565b620006fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000fdc565b6060620008d98484600085620008e3565b90505b9392505050565b60608247101562000922576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000edc565b6200092d85620009f2565b62000966576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e9062000fa5565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405162000991919062000ca0565b60006040518083038185875af1925050503d8060008114620009d0576040519150601f19603f3d011682016040523d82523d6000602084013e620009d5565b606091505b5091509150620009e7828286620009fc565b979650505050505050565b803b15155b919050565b6060831562000a0d575081620008dc565b82511562000a1e5782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019e919062000de7565b61158180620010e783390190565b600067ffffffffffffffff8084111562000a805762000a8062001094565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171562000ac95762000ac962001094565b8160405280935085815286868601111562000ae357600080fd5b858560208301376000602087830101525050509392505050565b8035620009f781620010c3565b60006020828403121562000b1c578081fd5b8135620008dc81620010c3565b60006020828403121562000b3b578081fd5b81518015158114620008dc578182fd5b6000806040838503121562000b5e578081fd5b823562000b6b81620010c3565b946020939093013593505050565b600080600080600060a0868803121562000b91578081fd5b853567ffffffffffffffff8082111562000ba9578283fd5b818801915088601f83011262000bbd578283fd5b62000bce8983356020850162000a62565b9650602088013591508082111562000be4578283fd5b508601601f8101881362000bf6578182fd5b62000c078882356020840162000a62565b94505062000c186040870162000afd565b92506060860135915062000c2f6080870162000afd565b90509295509295909350565b60006020828403121562000c4d578081fd5b5051919050565b6000815180845262000c6e81602086016020860162001065565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000825162000cb481846020870162001065565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b73ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b600061014073ffffffffffffffffffffffffffffffffffffffff808e16845281602085015262000d6a8285018e62000c54565b9150838203604085015262000d80828d62000c54565b9a811660608501526080840199909952505060a081019590955292851660c085015290841660e0840152610100830152909116610120909101529392505050565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060208252620008dc602083018462000c54565b600061012080835262000e128184018d62000c54565b9050828103602084015262000e28818c62000c54565b73ffffffffffffffffffffffffffffffffffffffff9a8b16604085015260608401999099525050948716608086015292861660a085015290851660c084015260e08301529092166101009092019190915292915050565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601d908201527f4552524f52203a204465706f7369742062616420616c6c6f77616e6365000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b92835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b60005b838110156200108257818101518382015260200162001068565b83811115620007e25750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff811681146200055657600080fdfe60806040523480156200001157600080fd5b50604051620015813803806200158183398101604081905262000034916200027d565b8851620000499060019060208c0190620000ed565b5087516200005f9060029060208b0190620000ed565b50600380546001600160a01b03199081166001600160a01b03998a161790915560049690965560058054871695881695909517909455600680548616938716939093179092556000805485169386169390931790925560408051808201909152919093168082526020909101839052600880549092161790556009555050600a805460ff19169055620003bf565b828054620000fb906200036c565b90600052602060002090601f0160209004810192826200011f57600085556200016a565b82601f106200013a57805160ff19168380011785556200016a565b828001600101855582156200016a579182015b828111156200016a5782518255916020019190600101906200014d565b50620001789291506200017c565b5090565b5b808211156200017857600081556001016200017d565b60006001600160401b0380841115620001b057620001b0620003a9565b604051601f8501601f19908116603f01168101908282118183101715620001db57620001db620003a9565b81604052809350858152868686011115620001f557600080fd5b600092505b858310156200021a578285015160208483010152602083019250620001fa565b858311156200022d576000602087830101525b5050509392505050565b80516001600160a01b03811681146200024f57600080fd5b919050565b600082601f83011262000265578081fd5b620002768383516020850162000193565b9392505050565b60008060008060008060008060006101208a8c0312156200029c578485fd5b89516001600160401b0380821115620002b3578687fd5b818c0191508c601f830112620002c7578687fd5b620002d88d83516020850162000193565b9a5060208c0151915080821115620002ee578687fd5b50620002fd8c828d0162000254565b9850506200030e60408b0162000237565b965060608a015195506200032560808b0162000237565b94506200033560a08b0162000237565b93506200034560c08b0162000237565b925060e08a015191506200035d6101008b0162000237565b90509295985092959850929598565b6002810460018216806200038157607f821691505b60208210811415620003a357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6111b280620003cf6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063b0a87ac111610081578063e0c234231161005b578063e0c2342314610186578063f294cf381461019b578063f7c618c1146101a3576100d4565b8063b0a87ac114610155578063b434151c1461015d578063d0e30db014610170576100d4565b80637ceae310116100b25780637ceae31014610116578063990cc4891461011e578063a888c2cd14610133576100d4565b8063310a1ee3146100d95780634621d082146100f75780636c3a4cce14610101575b600080fd5b6100e16101ab565b6040516100ee91906110af565b60405180910390f35b6100ff6101b1565b005b610109610338565b6040516100ee9190610e1c565b610109610354565b610126610370565b6040516100ee9190610e63565b610146610141366004610d86565b610379565b6040516100ee93929190610e81565b610109610452565b6100ff61016b366004610c91565b61046e565b6101786107a2565b6040516100ee929190610e3d565b61018e6107c4565b6040516100ee9190610e6e565b61018e610852565b61010961085f565b60045481565b60045442116101f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610f76565b60405180910390fd5b600a5460ff16610267576000546040805180820190915260085473ffffffffffffffffffffffffffffffffffffffff9081168252600954602083015261023b921661087b565b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555b6006546003546040517f70a082310000000000000000000000000000000000000000000000000000000081526103369273ffffffffffffffffffffffffffffffffffffffff9081169216906370a08231906102c6903090600401610e1c565b60206040518083038186803b1580156102de57600080fd5b505afa1580156102f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103169190610d9e565b60035473ffffffffffffffffffffffffffffffffffffffff1691906108b4565b565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b600a5460ff1681565b6007818154811061038957600080fd5b90600052602060002090600302016000915090508060000180546103ac906110e8565b80601f01602080910402602001604051908101604052809291908181526020018280546103d8906110e8565b80156104255780601f106103fa57610100808354040283529160200191610425565b820191906000526020600020905b81548152906001019060200180831161040857829003601f168201915b505050506001830154600290930154919273ffffffffffffffffffffffffffffffffffffffff1691905083565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b60055473ffffffffffffffffffffffffffffffffffffffff1633146104bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610fad565b83516104f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec9061101b565b6003546040517f70a0823100000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff16906370a082319061054e903090600401610e1c565b60206040518083038186803b15801561056657600080fd5b505afa15801561057a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059e9190610d9e565b905081156105eb5760085460035473ffffffffffffffffffffffffffffffffffffffff908116911614156105e7576009546000906105dd90839061095a565b94506105eb915050565b8092505b60085460035473ffffffffffffffffffffffffffffffffffffffff9081169116141561066157600061061d828561095a565b91505060086001015481101561065f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610ebc565b505b821561068b5760035461068b9073ffffffffffffffffffffffffffffffffffffffff1685856108b4565b6040805160608101825286815273ffffffffffffffffffffffffffffffffffffffff86166020808301919091529181018590526007805460018101825560009190915281518051929360039092027fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68801926107099284920190610bad565b5060208201516001820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055604091820151600290910155517fa1c3b325aa2c115e4b244062eba2515bc5585ae5b41556be8fef399ae9fde11b9061079390879087908790610e81565b60405180910390a15050505050565b60085460095473ffffffffffffffffffffffffffffffffffffffff9091169082565b600280546107d1906110e8565b80601f01602080910402602001604051908101604052809291908181526020018280546107fd906110e8565b801561084a5780601f1061081f5761010080835404028352916020019161084a565b820191906000526020600020905b81548152906001019060200180831161082d57829003601f168201915b505050505081565b600180546107d1906110e8565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b6020820151156108b057602082015182516108b09173ffffffffffffffffffffffffffffffffffffffff9091169083906108b4565b5050565b6109558363a9059cbb60e01b84846040516024016108d3929190610e3d565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610980565b505050565b6000808383111561097057506000905080610979565b50600190508183035b9250929050565b60006109e2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610a369092919063ffffffff16565b8051909150156109555780806020019051810190610a009190610c75565b610955576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90611052565b6060610a458484600085610a4f565b90505b9392505050565b606082471015610a8b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610f19565b610a9485610b50565b610aca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec90610fe4565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610af39190610e00565b60006040518083038185875af1925050503d8060008114610b30576040519150601f19603f3d011682016040523d82523d6000602084013e610b35565b606091505b5091509150610b45828286610b5a565b979650505050505050565b803b15155b919050565b60608315610b69575081610a48565b825115610b795782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ec9190610e6e565b828054610bb9906110e8565b90600052602060002090601f016020900481019282610bdb5760008555610c21565b82601f10610bf457805160ff1916838001178555610c21565b82800160010185558215610c21579182015b82811115610c21578251825591602001919060010190610c06565b50610c2d929150610c31565b5090565b5b80821115610c2d5760008155600101610c32565b803573ffffffffffffffffffffffffffffffffffffffff81168114610b5557600080fd5b8035610b558161116b565b600060208284031215610c86578081fd5b8151610a488161116b565b60008060008060808587031215610ca6578283fd5b843567ffffffffffffffff80821115610cbd578485fd5b818701915087601f830112610cd0578485fd5b813581811115610ce257610ce261113c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610d2857610d2861113c565b816040528281528a6020848701011115610d40578788fd5b8260208601602083013787602084830101528098505050505050610d6660208601610c46565b925060408501359150610d7b60608601610c6a565b905092959194509250565b600060208284031215610d97578081fd5b5035919050565b600060208284031215610daf578081fd5b5051919050565b60008151808452610dce8160208601602086016110b8565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60008251610e128184602087016110b8565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b901515815260200190565b600060208252610a486020830184610db6565b600060608252610e946060830186610db6565b73ffffffffffffffffffffffffffffffffffffffff9490941660208301525060400152919050565b60208082526027908201527f4552524f523a2053686f756c64206e6f742065786365656420616c6c6f77656460408201527f20626f756e747900000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b60208082526012908201527f4552524f523a204e6f7420657870697265640000000000000000000000000000604082015260600190565b60208082526018908201527f4552524f523a2053656e646572206e6f7420676f7665726e0000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b60208082526012908201527f4552524f523a204e6f2065766964656e63650000000000000000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b60005b838110156110d35781810151838201526020016110bb565b838111156110e2576000848401525b50505050565b6002810460018216806110fc57607f821691505b60208210811415611136577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b801515811461117957600080fd5b5056fea2646970667358221220f261a0dbe0423df068d28bd8e9072a0634bdc3720096340e6540eabb4d45720064736f6c63430008010033a2646970667358221220210b0a4398f6ccefd36ebcf7f03eea97f80f36a52fa5d553aa7dd6a3b943488164736f6c63430008010033";
