require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift rice stick pudding heavy civil army gate'; 
let testAccounts = [
"0x13766c85418d2e315cc67f3f12251db966d5b0828fbda5938c707e81a8b3a0be",
"0x08e75471155ba309c856e3bab79350f50cbecdf890fb378094d18f1164d3e4d5",
"0x126ae749036b244cd6f555079230e25417de8b1698e3c97ef47ddfd17be36296",
"0x9d5053daece992645ef021831e8b12f8cf57406a68ffe5513448c39651f0a618",
"0xc306476c970ce9bc28819b5ebe7b511997ecaa27785fa68517742cdb4c8984bc",
"0xd13cd20fb7311bd2739f9c1f5c82b98a23070d70caa6277e7d3354b958ec9681",
"0x4684ad471458f31924412a0be421abbc67b962831f661b35cd60f77c396f7b8d",
"0x5051ac49d1432b264c05c306642773152beb9c25c58fc2b829584a91d8bdcf32",
"0x639aaf6b12ad60c79d5894913adbc4ad6bbc8abe73942a5311fcc5c6ac49e9e6",
"0x87cf14b23410f35f1860cb9c42d437689d6f6f967c2a9fad2fff82977eb6849f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

