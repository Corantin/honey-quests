// @ts-ignore
import { ethers, deployments } from "hardhat";
import { use, expect } from "chai";
import { solidity } from "ethereum-waffle";
import { deployQuest, hashToBytes, getNowAsUnixEpoch } from "./test-helper";

use(solidity);

describe("[Contract] Quest", function () {
  const epoch0 = 0; // Set expireTime to Unix Epoch 0
  const depositAmount = 1;

  let govern;
  let player;
  let founder;

  beforeEach(async function () {
    [govern, player, founder] = await ethers.getSigners();
  });

  it("when create, should collect deposit", () => {
    // Arrange
    // Act
    // Assert
  });
  it("when create and creator aproved funds not enough, should revert", () => {
    // Arrange
    // Act
    // Assert
  });

  describe("recoverUnclaimedFunds()", function () {
    let rewardToken;
    const questFunds = 1000;

    beforeEach(async () => {
      await deployments.fixture(["TokenMock"]);
      rewardToken = await ethers.getContract("TokenMock");
    });

    it("should empty the quest funds and founder recover his funds", async function () {
      // Arrange
      const quest = await deployQuest(
        "fakeTitle",
        "0x",
        rewardToken,
        epoch0,
        govern.address,
        founder.address,
        questFunds,
        rewardToken.address,
        depositAmount
      );

      // Act
      await quest.recoverUnclaimedFunds();

      // Assert
      expect(await rewardToken.balanceOf(quest.address)).to.eq(0);
      expect(await rewardToken.balanceOf(founder.address)).to.eq(questFunds);
    });

    it("should revert if not expire", async function () {
      // Arrange
      const quest = await deployQuest(
        "fakeTitle",
        "0x",
        rewardToken,
        getNowAsUnixEpoch(),
        govern.address,
        founder.address,
        questFunds,
        rewardToken.address,
        depositAmount
      );

      // Act
      const act = () => quest.recoverUnclaimedFunds();

      // Assert
      await expect(act()).to.be.revertedWith("ERROR: Not expired");
    });
    it("when reclaimingFunds, should return deposit", () => {
      // Arrange
      // Act
      // Assert
    });
  });

  describe("claim()", function () {
    describe("questFund is 1000", function () {
      let rewardToken;
      const questFunds = 1000;

      beforeEach(async () => {
        await deployments.fixture(["TokenMock"]);
        rewardToken = await ethers.getContract("TokenMock");
      });

      it("should transfer amount to player", async function () {
        // Arrange
        const claimAmount = 500;
        const quest = await deployQuest(
          "fakeTitle",
          "0x",
          rewardToken,
          epoch0,
          govern.address,
          founder.address,
          questFunds,
          rewardToken.address,
          depositAmount
        );

        // Act
        await quest.claim(
          hashToBytes("evidence1"),
          player.address,
          claimAmount,
          false
        );

        // Assert
        expect(await rewardToken.balanceOf(player.address)).to.eq(claimAmount);
        expect(await rewardToken.balanceOf(quest.address)).to.eq(
          questFunds - claimAmount
        );
      });

      it("should transfer rest of available funds to player when claimAll is true", async function () {
        // Arrange
        const claimAmount = 500; // Claim all remaining
        const claimAll = true;
        const quest = await deployQuest(
          "fakeTitle",
          "0x",
          rewardToken,
          epoch0,
          govern.address,
          founder.address,
          questFunds,
          rewardToken.address,
          depositAmount
        );

        // Act
        await quest.claim(
          hashToBytes("evidence1"),
          player.address,
          claimAmount,
          claimAll
        );

        // Assert
        expect(await rewardToken.balanceOf(player.address)).to.eq(questFunds);
        expect(await rewardToken.balanceOf(quest.address)).to.eq(0);
      });

      it("should emit a ClaimEvent with correct args", async function () {
        // Arrange
        const claimAmount = 500; // Claim all remaining
        const evidence = hashToBytes("evidence1");
        const quest = await deployQuest(
          "fakeTitle",
          "0x",
          rewardToken,
          epoch0,
          govern.address,
          founder.address,
          questFunds,
          rewardToken.address,
          depositAmount
        );

        // Act
        const act = () =>
          quest.claim(evidence, player.address, claimAmount, false);

        // Assert
        await expect(act())
          .to.emit(quest, "QuestClaimed")
          .withArgs(evidence, player.address, claimAmount);
      });

      it("should revert if the claim is greater than the quest funds", async function () {
        // Arrange
        const claimAmount = questFunds + 1;
        const evidence = hashToBytes("evidence1");
        const quest = await deployQuest(
          "fakeTitle",
          "0x",
          rewardToken,
          epoch0,
          govern.address,
          founder.address,
          questFunds,
          rewardToken.address,
          depositAmount
        );

        // Act
        const act = () =>
          quest.claim(evidence, player.address, claimAmount, false);

        // Assert
        await expect(act()).to.be.revertedWith(
          "ERC20: transfer amount exceeds balance"
        );
      });

      it("should revert if the there is no provided evidence", async function () {
        // Arrange
        const claimAmount = questFunds + 1;
        const evidence = [];
        const quest = await deployQuest(
          "fakeTitle",
          "0x",
          rewardToken,
          epoch0,
          govern.address,
          founder.address,
          questFunds,
          rewardToken.address,
          depositAmount
        );

        // Act
        const act = () =>
          quest.claim(evidence, player.address, claimAmount, false);

        // Assert
        await expect(act()).to.be.revertedWith("ERROR: No evidence");
      });
    });

    it("should revert if caller is not govern", async function () {
      // Arrange
      const rewardToken = await ethers.getContract("TokenMock");
      const quest = await deployQuest(
        "fakeTitle",
        "0x",
        rewardToken,
        epoch0,
        govern.address,
        founder.address,
        0,
        rewardToken.address,
        depositAmount
      );

      // Act
      const act = () =>
        quest
          .connect(player)
          .claim(hashToBytes("evidence1"), player.address, 0, true); // player claims by himself (should throw)

      // Assert
      await expect(act()).to.be.revertedWith("ERROR: Sender not govern");
    });

    it("when deposit and rewardToken the same, should let the deposit", () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
