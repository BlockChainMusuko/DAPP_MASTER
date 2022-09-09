import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet, //ethereumTestnet, //hardhatLocal,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'BigContract', //Blanton
  tokenName: 'BlantonIsGreateToken', //Blanton
  tokenSymbol: 'BIG', //Blanton
  hiddenMetadataUri: 'ipfs://QmdZTyhMxqneWXN5SXaCWAcSVAowgUKckct6HM8SGnGA6Z/hidden_json.json', //Blanton
  maxSupply: 20, //Blanton
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xf35504C1C55E57e807Af00448545Ded574a17d7b", //Blanton <-- fill this in after deployment
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
