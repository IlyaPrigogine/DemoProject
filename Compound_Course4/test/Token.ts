// import {ethers} from "ethers";
import { ethers } from "hardhat";

const { expect } = require("chai");

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner,addr1,addr2] = await ethers.getSigners();

        const Token = await ethers.getContractFactory("Token");

        const hardhatToken = await Token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

        console.log(`owner: ${owner.address}`);
        console.log(`addr1: ${addr1.address}`);
        console.log(`addr2: ${addr2.address}`);
    });
});
