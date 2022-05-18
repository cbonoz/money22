import { Input, Button } from 'antd'
import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import PoolInfo from './PoolInfo'

export default function FindPool() {
  const [poolAddress, setPoolAddress] = useState()
  const [value, setValue] = useState()
  const navigate = useNavigate()
    
  return (
    <div>
      {!poolAddress && <div>
        <h1>Enter WorkPool name:</h1>
        <Input prefix="Name:" className='standard-input' type="text" value={value} onChange={e => setValue(e.target.value)}/>
        <Button className='standard-btn' disabled={!value} type="primary" onClick={() => navigate('/pool/' + value)}> 
          Continue
        </Button>
        
      </div>}

    </div>
  )
}
