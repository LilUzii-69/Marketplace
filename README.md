# Collector Project Deployment Guide

## Requirements
- Terminal / Window Shell (3 windows)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Metamask](https://metamask.io/)
- [Hardhat](https://hardhat.org/)

## Steps
1. Open 3 windows of Terminal / Window Shell.
2. In one of the windows, run the following command to start the frontend development server:
    ```
    yarn dev
    ```
3. In another window, run the following command to start a local Hardhat node:
    ```
    yarn hardhat node
    ```
4. In the third window, run the following command to deploy the Collector Project contracts:
    ```
    yarn hardhat run scripts/deploy.js --network localhost
    ```
5. Copy the wallet address generated in the deployment process and replace it in `scripts/transfer-eth.js` at line number 13. Then, run the following command to transfer ETH to the account:
    ```
    yarn hardhat run scripts/transfer-eth.js --network localhost
    ```
6. Open Metamask and go to the settings panel. In the advanced section, press the "Reset Account" button.
7. You're done! The Collector Project is now deployed and ready to use.
