require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet repeat mad huge grid kangaroo army gate'; 
let testAccounts = [
"0x9d56aead66957352fc90f718b64354bea351d6f7839d99c6c8e97231b96d6897",
"0x7e9f6601c02ead7640f6c8c4dfbead6d1d3331d263a33437a68f53caf9ccab38",
"0xea66fd2ba4b3d1e3f3beac76483956cb045eefce33d50cecb9ec5e631f440b65",
"0x99e34b6476146c772a6ac7cf775b4fbbeee697c14098985f962ec257352180d7",
"0x95fd546e6fd043c4b845c12eb5ee56251ed4b870d9e82d433a0cea36b7c1358c",
"0x31ec5d1bb913cd8167a78319f2f81301715f8a1702bbdbe6722fa366b8812f61",
"0x8d3b588d78f4d7975a6e7ddf5dea7580ff7cb0357b3a0167dcb26d5ca18d3ae3",
"0x4b72b6f47ace9ae6f3770ec30a171d1b56d28520e9a323f84e93ba6507c1b371",
"0xeec8b5d986d0c4b8c54ec0008a5a71c98a4f0ac60797f20e3d550e3d8e824376",
"0xb08b275f16785a40db2ca2f8a304fee7db195839b3d3933ecf94e38e3c1295aa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
