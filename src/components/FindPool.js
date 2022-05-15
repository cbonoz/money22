import { Input, Button } from 'antd'
import React, {useState} from 'react'
import PoolInfo from './PoolInfo'

export default function FindPool() {
  const [poolId, setPoolId] = useState()
  const [value, setValue] = useState()
    
  return (
    <div>
      {!poolId && <div>
        <Input className='standard-input' type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <Button className='standard-btn' disabled={!value} type="primary" onClick={() => setPoolId(value)}> 
          Continue
        </Button>
        
      </div>}


      {poolId && <div>
        <PoolInfo poolId={poolId}/>
      </div>}


    </div>
  )
}
