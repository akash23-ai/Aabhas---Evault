// Help Truffle find `TruffleTutorial.sol` in the `/contracts` directory
const Upload = artifacts.require("Upload");

module.exports = function(deployer) {
  // Command Truffle to deploy the Smart Contract
  deployer.deploy(Upload);
};