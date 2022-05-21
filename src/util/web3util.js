import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
import { RPC_ID, RPC_URL } from "./constants";
import Web3 from "web3"

const provider = new WalletConnectProvider({
  rpc: {
    80001: RPC_URL
  },
  qrcode: true,
});

export const getExistingAddress = () => {
  if (provider.connected)  {
    const p = new providers.Web3Provider(provider); 
    console.log('getExisting', p)
    return p.provider.accounts[0]
  }
  return undefined
}

export const initWeb3 = async () => {
    console.log('initWeb3', RPC_ID)
    //  Create WalletConnect Provider
    // https://docs.walletconnect.com/quick-start/dapps/web3-provider#infura-id
  
    //  Enable session (triggers QR Code modal)
    await provider.enable()
    // web3Provider = new Web3(provider)


    //  Wrap with Web3Provider from ethers.js
    return new providers.Web3Provider(provider);
}

