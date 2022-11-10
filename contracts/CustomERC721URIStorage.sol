// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

abstract contract CustomERC721URIStorage is ERC721URIStorage {
    address public contractAddress;

    mapping(uint256 => string) private _tokenName;
    mapping(uint256 => string) private _tokenDesc;

    constructor(address marketplaceAddress) ERC721("Metaverse Tokens", "METT") {
        contractAddress = marketplaceAddress;
    }

    function tokenName(uint256 tokenId)
        public
        view
        virtual
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721URIStorage: NAME query for nonexistent token"
        );

        string memory _tokenN = _tokenName[tokenId];
        string memory base = _baseURI();

        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenN;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenN).length > 0) {
            return string(abi.encodePacked(base, _tokenN));
        }

        return "";
    }

    function tokenDesc(uint256 tokenId)
        public
        view
        virtual
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721URIStorage: DESCRIPTION query for nonexistent token"
        );

        string memory _tokenDescription = _tokenDesc[tokenId];
        string memory base = _baseURI();

        // If there is no base URI, return the token URI.
        if (bytes(base).length == 0) {
            return _tokenDescription;
        }
        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        if (bytes(_tokenDescription).length > 0) {
            return string(abi.encodePacked(base, _tokenDescription));
        }

        return "";
    }

    function _setTokenName(uint256 newItemId, string memory _tokenN) internal {
        require(
            _exists(newItemId),
            "ERC721URIStorage: NAME set of nonexistent token"
        );
        _tokenName[newItemId] = _tokenN;
    }

    function _setTokenDescription(uint256 newItemId, string memory _tokenDs)
        internal
    {
        require(
            _exists(newItemId),
            "ERC721URIStorage: DESCRIPTION set of nonexistent token"
        );
        _tokenDesc[newItemId] = _tokenDs;
    }
}
