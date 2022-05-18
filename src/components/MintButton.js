import { Button } from 'antd'
import React, {useState} from 'react'
import { REWARD_IMAGES } from '../util/constants'
import { storeNFT } from '../util/stor'

export default function MintButton({balance, rewardBalance}) {
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState()

    const imgUrl = REWARD_IMAGES[rewardBalance]

    const mint = async () => {
        console.log('mint', imgUrl)
        if (!imgUrl) {
            alert('No badge available for ' + rewardBalance + ' reward.')
            return
        }

            setLoading(true)
        try {
            const res = await storeNFT(imgUrl, `$${rewardBalance}`, `Unlocked for reaching $${rewardBalance} account balance.`)
            console.log('minted', res)
            setResult(res)
        } catch (e) {
            alert(e)
            console.error('e', e)
        } finally {
            setLoading(false)
        }
    }

    const notEnoughBalance = balance < rewardBalance

    const text = notEnoughBalance ? 'Unlocks at $' + rewardBalance : 'Mint Reward to Wallet'

  return (
    <div className='standard-btn'>
        <img src={imgUrl} className='mint-image'/>
        <Button disabled={loading || notEnoughBalance} loading={loading} onClick={mint}>{text}</Button>
        {result && <div>
            <br/>
            <p className='green'>Minted!</p>
            <pre>
            {JSON.stringify(result, null, '\t')} 
            </pre>
        </div>}
    </div>
  )
}
