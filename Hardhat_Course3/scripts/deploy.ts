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

  const Dai = await ethers.getContractAt("IERC20","0xc4375b7de8af5a38a93548eb8453a498222c4ff2");

  console.log(`dai.totalSupply: ${await Dai.totalSupply()}`)
  console.log(`dai.decimals: ${await Dai.decimals()}`);

  const Aave = await ethers.getContractAt("IERC20","0x1d70fE7272F07E38e4bE71636e711bC007341273");
  console.log(`Aave.name: ${await Aave.totalSupply()}`);
  console.log(`Aave.decimals: ${await Aave.decimals()}`);

  const AggregatorV3 = await ethers.getContractAt("AggregatorV3Interface", "0x9326BFA02ADD2366b30bacB125260Af641031331");
  // console.log(`Aggregator.decimals: ${await AggregatorV3.decimals()}`);
  console.log(`Aggregator.description: ${await AggregatorV3.description()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
