pragma solidity ^0.5.16;

import "./Interface/IERC20.sol";
import './Interface/ComptrollerInterface.sol';
import "./Interface/CTokenInterface.sol";

contract MyDefiProject {
    IERC20 dai;
    CTokenInterface cDai;

    IERC20 bat;
    CTokenInterface cBat;

    ComptrollerInterface comptroller;

    constructor (
        address _dai,
        address _cDai,
        address _bat,
        address _cBat,
        address _comptroller
    ) public {
        dai = IERC20(_dai);
        cDai = CTokenInterface(_cDai);

        bat = IERC20(_bat);
        cBat = CTokenInterface(_cBat);

        comptroller = ComptrollerInterface(_comptroller);
    }

    function invest() external {
        dai.approve(address(cDai), 10000000);
        cDai.mint(10000);
    }

    
}
