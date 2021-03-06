export const APP_NAME = 'WorkPools'
export const APP_DESC = 'Create investment pools with friends and coworkers in fixed-income crypto assets.'

const requireEnv = (k) => {
    const v = process.env[k]
    if (!v) {
        alert('Env variable ' + k + ' is required')
    }
    return v
}

export const NFT_STORAGE_KEY = requireEnv('REACT_APP_NFT_KEY')

export const RPC_ID = process.env.REACT_APP_INFURA_ID
export const RPC_URL = process.env.REACT_APP_RPC_URL || 'https://rpc-matic.mumbai.today'

export const EXAMPLE_FORM = {}
export const LOGIN_MESSAGE = "WorldPools would like connect to your wallet."

export const CHAIN_OPTIONS = {
    80001: {
      name: "Mumbai",
      host: `https://rpc-mumbai.matic.today`,
      url: "https://mumbai.polygonscan.com/",
      id: 80001,
    },
    137: {
      name: "Matic Mainnet",
      url: "https://polygonscan.com/",
      id: 137,
    },
   1: { name: "ethereum", url: "https://etherscan.io/tx/", id: 1 },
   42: { name: "kovan", url: "https://kovan.etherscan.io/", id: 42 },
   4: { name: "rinkeby", url: "https://rinkeby.etherscan.io/tx/", id: 4 },
   5: { name: "goerli", url: "https://goerli.etherscan.io/", addressUrl: "https://goerli.etherscan.io/address/", id: 5 },
}
  
export const ACTIVE_CHAIN_ID = CHAIN_OPTIONS["80001"];

export const AAVE_MUMBAI_RESERVE = "0xb685400156cF3CBE8725958DeAA61436727A30c3"

export const REWARD_IMAGES = {
    1000:'https://image.shutterstock.com/image-vector/1000-dollars-sign-usd-badge-260nw-1892401765.jpg',
    5000:'https://icon-library.com/images/google-icon-image/google-icon-image-10.jpg',
    10000:'https://www.uwindsor.ca/cces/sites/uwindsor.ca.cces/files/salary_icon2.png',
}

export const PIE_DATA = [["Tempus", 400], ["Aave", 625]]

export const INITIAL_BALANCE = PIE_DATA.map(x => x[1]).reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
export const IPFS_BASE_URL = 'https://ipfs.io/ipfs/'

export const COVALENT_KEY = process.env.REACT_APP_COVALENT_KEY;