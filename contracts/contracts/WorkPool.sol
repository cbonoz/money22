//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract WorkPool is Ownable {

    string private company;
    string private name;

    string private code;

    constructor(string memory _company, string memory _name, string memory _code) {
        name = _name;
        company = _company;
        code = _code;
    }

    function getName() public view returns(string memory) {
        return name;
    }

    function getCompany() public view returns(string memory) {
        return company;
    }

    function getCode() public view onlyOwner returns(string memory) {
        return code;
    }

    function compareStrings(string memory a, string memory b) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

    function checkCode(string memory inputCode) public view returns(bool) {
        require(compareStrings(inputCode, code), "Invalid Code");
        return true;
    }

}