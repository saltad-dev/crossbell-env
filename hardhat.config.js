/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      hardfork: "berlin",
      forking: {
        url: "https://rpc.crossbell.io",
      }
    }
  }
};
