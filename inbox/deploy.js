// deploy code will go here
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'october celery firm raise nuclear gate view someone sun fringe chunk teach',
    'https://rinkeby.infura.io/v3/df277fabdd07466cabccf3a8d39b6931'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0], gasPrice: '5000000000' });

    console.log('Contract deployed to', result.options.address);
};
deploy();