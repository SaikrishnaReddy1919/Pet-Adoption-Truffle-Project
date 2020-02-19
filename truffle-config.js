const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const MNEMONIC = "ensure bridge vital ahead glare own wear pelican where lake material mandate";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby:{
      provider : () => new HDWalletProvider(MNEMONIC,"https://rinkeby.infura.io/v3/6caedd4ac9f44d6cb386e0c05b8cc6b4"),
      network_id : 4,
      networkCheckTimeout: 1000000,
    }
  }
};
