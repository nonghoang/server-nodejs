import web3 from 'config/web3'
const eth = {}

// web3.eth.getAccounts().then((accounts) => {
//   console.log('accounts', accounts)
// });

eth.createAccount = function() {
  return web3.eth.accounts.create()
}

eth.getBalanceAccount = async (address) => {
  return await web3.eth.getBalance(address)
}

export default eth
