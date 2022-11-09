const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();

  await owner.sendTransaction({
    to: "0x8d862DBDe6002383E0c8be6d869cb2B01d58E297",
    value: ethers.utils.parseEther("100.0"),
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
