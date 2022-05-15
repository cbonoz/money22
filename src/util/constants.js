export const APP_NAME = 'WorkPools'
export const APP_DESC = 'Invest with friends and coworkers on web3'

const requireEnv = (k) => {
    const v = process.env[k]
    if (!v) {
        alert('Env variable ' + k + ' is required')
    }
    return v
}

export const NFT_STORAGE_KEY = requireEnv('REACT_APP_NFT_KEY')

export const RPC_ID = process.env.REACT_APP_INFURA_ID
export const MORALIS_SERVER = process.env.REACT_APP_MORALIS_SERVER
export const MORALIS_ID = process.env.REACT_APP_MORALIS_ID

export const EXAMPLE_FORM = {}
export const LOGIN_MESSAGE = "WorldPools would like access to your account "

export const CHAIN_OPTIONS = {
    80001: {
      name: "Mumbai",
      url: "https://mumbai.polygonscan.com/",
      id: 80001,
    },
    137: {
      name: "Matic Mainnet",
      url: "https://polygonscan.com/",
      id: 137,
    },
   1: { name: "ethereum", url: "https://etherscan.io/tx/", id: 1 },
   42: { name: "kovan", url: "https://kovan.etherscan.io/tx/", id: 42 },
   4: { name: "rinkeby", url: "https://rinkeby.etherscan.io/tx/", id: 4 },
   5: { name: "goerli", url: "https://goerli.etherscan.io/tx/", id: 5 },
}
  
  export const ACTIVE_CHAIN_ID = CHAIN_OPTIONS["5"];

export const IPFS_BASE_URL = "https://ipfs.moralis.io:2053/ipfs";

export const REWARD_IMAGES = {
    1000:'',
    5000:'',
    10000:'',
}
