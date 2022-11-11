# Orbit

Step to run Collector Project
1. Open 3 windows of Terminal / Window Shell
2. Run frontend yarn dev
3. Run Hardhat local node yarn hardhat node
4. Run deployment script yarn hardhat run scripts/deploy.js --network localhost
5. Copy wallet address and replace it in files scripts/transfer-eth.js at line number 13. Then run a script that transfer ETH to account yarn hardhat run scripts/transfer-eth.js --network localhost
6. Open Metamask setting panel. Go to Advanced. Press the reset account
7. Done ! 