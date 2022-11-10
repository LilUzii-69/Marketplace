import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import Image from "next/image";

import { nftmarketaddress, nftaddress } from "../config";

import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";

export default function MyAssets() {
  const [nfts, setNfts] = useState([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      signer
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
    const data = await marketContract.fetchMyNFTs();

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const tokenName = await tokenContract.tokenName(i.tokenId);
        const tokenDescription = await tokenContract.tokenDesc(i.tokenId);

        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          itemId: i.itemId,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: tokenUri,
          name: tokenName,
          description: tokenDescription,
        };
        return item;
      })
    );
    setNfts(items);
    setLoadingState("loaded");
  }
  if (loadingState === "loaded" && !nfts.length)
    return (
      <h1 className="py-10 px-20 text-3xl text-green-400">No assets owned</h1>
    );

  return (
    <div className="">
      <div className="px-10 py-5">
        <h2 className="text-green-400 text-3xl py-2">Your assets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
          {nfts.map((nft, i) => (
            <div key={i} className="shadow rounded-xl overflow-hidden">
              <div className="w-full relative ">
                <img
                  src={nft.image}
                  alt={(nft.name, nft.description)}
                  style={{ height: "300px", width: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="p-4 bg-black">
                <p className="text-2xl font-bold text-white">
                  Price - {nft.price} Eth
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
