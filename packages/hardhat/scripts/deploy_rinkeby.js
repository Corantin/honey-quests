/* eslint no-use-before-define: "warn" */
const { ethers, run } = require("hardhat");

const GOVERN_CONTRACT = "0xc03710063b0e4435f997A0B1bbdf2680A2f07E13";

const main = async () => {
  await run("compile");
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const QuestFactory = await ethers.getContractFactory("QuestFactory");
  const questFactory = await (
    await QuestFactory.deploy(GOVERN_CONTRACT)
  ).deployed();

  console.log("QuestFactory address:", questFactory.address);

  await run("verify:verify", {
    address: questFactory.address,
  });

  return questFactory;
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
