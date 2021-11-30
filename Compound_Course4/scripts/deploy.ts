// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await ethers.getContractFactory("Greeter");
  // const greeter = await Greeter.deploy("Hello, Hardhat!");
  //
  // await greeter.deployed();
  //
  // console.log("Greeter deployed to:", greeter.address);

  const [owner] = await ethers.getSigners();

  // const daiAddress = "0xaD6D458402F60fD3Bd25163575031ACDce07538D"; //ropsten
  const daiAddress = "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa";
  const Dai = await ethers.getContractAt("IERC20", daiAddress);

  const targetAddres = "0xE9883A17Ef193241dec09DC213A0D2aaE0462da2";

  console.log(`owner: ${owner.address}`);

  console.log(`dai.balanceOf: ${await Dai.balanceOf(owner.address)}`);

  // await Dai.transfer(ethers.constants.AddressZero,ethers.constants.WeiPerEther);
  // await Dai.transfer(targetAddres, ethers.constants.WeiPerEther);

  const cDaiAddress = "0xF0d0EB522cfa50B716B3b1604C4F0fA6f04376AD";
  const cDai = await ethers.getContractAt("CTokenInterface", cDaiAddress);
  console.log(`cDai.balanceOf(owner): ${await cDai.balanceOf(owner.address)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
