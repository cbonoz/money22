import axios from 'axios'
import { NFT_STORAGE_KEY } from './constants';
// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage/dist/bundle.esm.min.js'

export function fileFromUrl(externalUrl) {
    return axios.get(externalUrl, {
    responseType: 'blob'
  })
 
}

export async function storeNFT(imageUrl, name, description) {
    // load the file from disk
    const response = await fileFromUrl(imageUrl)
    const image = new File([response.data], name);       

    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    // call client.store, passing in the image & metadata
    return nftstorage.store({
        image,
        name,
        description,
    })
}