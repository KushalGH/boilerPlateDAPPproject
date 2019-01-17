// Allows us to use ES6 in our migrations and tests.
require('babel-register')

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider("explain ride buzz box quick advice cross zoo moon mask observe key",
                                    "https://rinkeby.infura.io/v3/4ba189f72116445f8516bdd47c41d65a")
      },
      network_id: '*',
      gas: 4500000,
      gasPrice: 10000000000,
	}
  }
}
