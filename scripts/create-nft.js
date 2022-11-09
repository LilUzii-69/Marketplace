const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const NFTMarketFactory = await hre.ethers.getContractFactory("NFTMarket");
  const NFTFactory = await hre.ethers.getContractFactory("NFT");

  const marketplace = NFTMarketFactory.attach(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  const nft = NFTFactory.attach("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");

  // const transaction = await nft.createToken(
  //   "https://obs.line-scdn.net/0hnuOrIVlOMVpyCyXv3SlODUpdPStBbStTUG4uaAcLP25bJ3cETWtiOQMJbnZWMnELUm93PV4DbD1dOiZfTA/w644"
  // );
  // const tx = await transaction.wait();
  // const event = tx.events[0];
  // const value = event.args[2];
  // const tokenId = value.toNumber();
  // console.log("tokenId", tokenId);

  // const fetched = await nft.tokenURI(tokenId);
  // console.log("fetched", fetched);

  const nfts = await marketplace.fetchItemsCreated();
  console.log(nfts, "\n");

  const listingPrice = await marketplace.getListingPrice();

  await marketplace.createMarketSale(nft.address, 4, {
    value: ethers.utils.parseEther("3"),
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
