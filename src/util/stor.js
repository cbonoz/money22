import axios from 'axios'
import { NFT_STORAGE_KEY } from './constants';
// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage, File } from 'nft.storage'

// The 'mime' npm package helps us set the correct file type on our File objects
import mime from 'mime'



export function fileFromUrl(externalUrl) {
    return axios
  .get(externalUrl, {
    responseType: 'arraybuffer'
  })
  .then(response => {
    const buffer = Buffer.from(response.data, 'base64');
  })
  .catch(ex => {
    console.error(ex);
  });
}


export async function storeNFT(imageUrl, name, description) {
    // load the file from disk
    const image = await fileFromUrl(imageUrl)

    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    // call client.store, passing in the image & metadata
    return nftstorage.store({
        image,
        name,
        description,
    })
}