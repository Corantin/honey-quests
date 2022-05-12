import { HardhatEthersHelpers } from "@nomiclabs/hardhat-ethers/dist/src/types";
import { Network } from "hardhat/types";
import GovernFactoryAbi from "../abi/contracts/Externals/GovernFactory.json";
import fs from "fs";

export default async function deployGovern(
  args: { initialExecutorAddress: string; governFactoryAddress: string },
  {
    network,
    ethers,
  }: {
    ethers: typeof import("C:/Repos/quests/node_modules/ethers/lib/ethers") &
      HardhatEthersHelpers;
    network: Network;
  }
) {
  const governFactory = await ethers.getContractAt(
    GovernFactoryAbi,
    args.governFactoryAddress
  );
  const tx = await governFactory.newGovern(
    args.initialExecutorAddress,
    ethers.constants.HashZero
  );
  const res = await tx.wait();
  const newGovernAddress = res.logs[0].address;
  console.log("Deployed govern (" + network.name + "): ", newGovernAddress);
  fs.writeFileSync(
    "./deployments/" + network.name + "/Govern.json",
    JSON.stringify({
      address: newGovernAddress,
    })
  );
  return newGovernAddress;
}
