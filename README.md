

<br/>
<p align='center'>
    <img src="./img/logo.png" width=300/>
</p>
<br/>

WorkPools
---


Invest in passive yielding liquidity pools with your friends and colleagues. Earn badges as you reach investment milestones.

### Motivation

It's common to create small crypto social groups at work, but often that's where it ends. With WorkPools, you can set up custom investment pools with your friends and strategize the best ways to earn return on your crypto assets together.

WorkPools reduces intimidation by creating a group space for coworkers/friends to learn about yield pools and invest together.

<!--
Demo flow:


-->


### How it works:

1. Login with web3 provider
2. Select company, worldcoin verifies if a single transaction was made by this individual for this company, or if the pool already exists.
3. Create the pool / invite others by sharing a unique link to the pool. 
4. View rewards on the pool.
5. Discover pools by category.


### Sponsors used:


WorldCoin: Validate the user accessing/creating the pool.
WalletConnect: https://docs.walletconnect.com/quick-start/dapps/web3-provider
Filecoin: Earn NFT rewards as you hit milestones.
Babylon: Pool creation
Chainstack: RPC Url
zkSync:
Superfluid: Lending
Spheron: Deployment

### How to run

Define the following environment variables:
<pre>
    REACT_APP_NFT_KEY={YOUR NFT STORAGE KEY} // Used for NFT generation
    REACT_APP_RPC_URL={YOUR RPC NODE URL} // Used for blockchain network calls.
    // Optional (for persistent non-IFPS storage)
    REACT_APP_MORALIS_ID={YOUR_MORALIS_APP_ID} # Moralis app id 
    REACT_APP_MORALIS_SERVER={YOUR_MORALIS_SERVER_URL} # Moralis server url
</pre>

`yarn; yarn start`

The app should now be running on port 3000.

## Screenshots

### Home page
<img src="./img/home.png" width=800/>
### Creating a new WorkPool
<img src="./img/create.png" width=800/>
### WorkPool dashboard / investment management
<img src="./img/dashboard.png" width=800/>

### Useful links
*  https://nft.storage/
* https://docs.walletconnect.com/quick-start/dapps/web3-provider
* https://docs.chainstack.com/quickstart/create-a-project
* https://ethglobal.notion.site/HackMoney-Info-Center-294c61659a7e48da926cca8d0d40588b
* https://showcase.ethglobal.com/hackmoney2022/prizes
* https://hackmd.io/@hackyguru/walletconnect
* https://hardhat.org/tutorial/creating-a-new-hardhat-project.html
* https://v2-docs.zksync.io/dev/guide/hello-world.html#prerequisites
* https://v2-docs.zksync.io/dev/guide/hello-world.html#working-with-provider

