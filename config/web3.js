import Web3 from 'web3'
import config from 'config/config'

// const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
const web3 = new Web3(new Web3.providers.HttpProvider(config.httpProvider))

export default web3
