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
