// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract BoboNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("BoboNFT", "BNFT") {}

    function mint(address recipient, string memory tokenURI)
        public onlyOwner
        returns (uint256)
    {
        uint256 curr = _tokenIds.current();
        _mint(recipient, curr);
        _setTokenURI(curr, tokenURI);
        _tokenIds.increment();

        return curr;
    }
}