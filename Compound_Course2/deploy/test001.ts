import {DeployFunction} from "hardhat-deploy/dist/types";

const func: DeployFunction = async function ({deployments, getNamedAccounts, network, getChainId}) {
    const {deploy, execute} = deployments;

    const {owner} = await getNamedAccounts();

    console.log(`owner: ${owner}`);

}

export default func;
