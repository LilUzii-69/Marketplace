// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./CustomERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is CustomERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(address marketplaceAddress)
        CustomERC721URIStorage(marketplaceAddress)
    {}

    function createToken(
        string memory tokenURI,
        string memory tokenName,
        string memory tokenDesc
    ) public returns (uint256) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        _setTokenName(newItemId, tokenName);
        _setTokenDescription(newItemId, tokenDesc);

        setApprovalForAll(contractAddress, true);
        return newItemId;
    }
}
