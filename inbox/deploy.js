// deploy code will go here
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'october celery firm raise nuclear gate view someone sun fringe chunk teach',
    'https://rinkeby.infura.io/v3/df277fabdd07466cabccf3a8d39b6931'
);
const web3 = new Web3(provider);