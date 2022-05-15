import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
import { RPC_ID } from "./constants";

export let web3Provider = {}

export const initWeb3 = async () => {
    console.log('initWeb3', RPC_ID)
    //  Create WalletConnect Provider
    // https://docs.walletconnect.com/quick-start/dapps/web3-provider#infura-id
    const provider = new WalletConnectProvider({
        // TODO: add chainstack node or use infura here
        infuraId: RPC_ID
        // rpc: {
        // 1: "https://mainnet.mycustomnode.com",
        // 3: "https://ropsten.mycustomnode.com",
        // 100: "https://dai.poa.network",
        // ...
        // },
    });

    //  Enable session (triggers QR Code modal)
    await provider.enable();


    //  Wrap with Web3Provider from ethers.js
    web3Provider = new providers.Web3Provider(provider);
    return provider;
}

