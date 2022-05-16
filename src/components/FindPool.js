import { Input, Button } from 'antd'
import React, {useState} from 'react'
import PoolInfo from './PoolInfo'

export default function FindPool() {
  const [poolAddress, setPoolAddress] = useState()
  const [value, setValue] = useState()
    
  return (
    <div>
      {!poolAddress && <div>
        <Input className='standard-input' type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <Button className='standard-btn' disabled={!value} type="primary" onClick={() => setPoolAddress(value)}> 
          Continue
        </Button>
        
      </div>}


      {poolAddress && <div>
        <PoolInfo poolId={poolAddress}/>
      </div>}


    </div>
  )
}
