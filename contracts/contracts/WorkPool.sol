//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract WorkPool {

    string private company;
    string private name;

    constructor(string memory _company, string memory _name) {
        name = _name;
        company = _company;
    }

}