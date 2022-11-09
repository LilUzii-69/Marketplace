const hre = require("hardhat");
const ethers = require("ethers");

async function main() {
  const NFTMarketFactory = await hre.ethers.getContractFactory("NFTMarket");
  const NFTFactory = await hre.ethers.getContractFactory("NFT");

  const marketplace = NFTMarketFactory.attach(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  const nft = NFTFactory.attach("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");

  await marketplace.createMarketItem(
    nft.address,
    3,
    ethers.utils.parseEther("2"),
    {
      value: ethers.utils.parseEther("0.025"),
    }
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
