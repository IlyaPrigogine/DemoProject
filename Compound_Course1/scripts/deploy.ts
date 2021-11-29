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

  // eslint-disable-next-line no-unused-vars
  const dai = "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa";
  const bat = "0x482dC9bB08111CB875109B075A40881E48aE02Cd";
  const cDai = "0xF0d0EB522cfa50B716B3b1604C4F0fA6f04376AD";
  const cBat = "0x4a77fAeE9650b09849Ff459eA1476eaB01606C7a";
  const comptroller = "0x5eAe89DC1C671724A672ff0630122ee834098657";

  const MyDefiProject = await ethers.getContractFactory("MyDefiProject");
  const myDefiProject = await MyDefiProject.deploy(dai,cDai,bat,cBat,comptroller);

  await myDefiProject.deployed();
  console.log(`myDefiProject.address: ${await myDefiProject.address}`);
  await myDefiProject.invest();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
