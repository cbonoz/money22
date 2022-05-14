import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";

let provider

export const initWeb3 = async () => {
    //  Create WalletConnect Provider
    // https://docs.walletconnect.com/quick-start/dapps/web3-provider#infura-id
    const provider = new WalletConnectProvider({
        // TODO: add chainstack node or use infura here

    rpc: {
        // 1: "https://mainnet.mycustomnode.com",
        // 3: "https://ropsten.mycustomnode.com",
        // 100: "https://dai.poa.network",
        // ...
    },
    });

    //  Enable session (triggers QR Code modal)
    await provider.enable();


    //  Wrap with Web3Provider from ethers.js
    provider = new providers.Web3Provider(provider);
}

