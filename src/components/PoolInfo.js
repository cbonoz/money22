import React, {useState, useEffect} from 'react'
import { Button, Input, Statistic } from 'antd'
import {useParams} from "react-router-dom";
import { formatMoney } from '../util';

// Main pool info page

export default function PoolInfo({}  ) {
    const [hasAccess, setHasAccess] = useState(false)
    const [balance, setBalance] = useState(1050)
    const [code, setCode] = useState()
    
    const [data ,setData] = useState({})
    const { poolId } = useParams()

    const checkCode = async () => {
        // TODO: add access check logic.
        setHasAccess(true)
    }


    if (!hasAccess) {
        return <div>
    <h3>Enter pool access code</h3>
    <Input prefix="Enter code:" type="password"  className='standard-input' code={code} onChange={e => {
        setCode(e.target.value)
    }}/>
        <Button type="primary"  className='standard-btn' onClick={checkCode} disabled={!code}> 
            Access
        </Button></div>
        }


  return (
    <div>WorkPool: {poolId}
          <Statistic className='green'  title="Account Balance ($)" value={formatMoney(balance)} precision={2} />

    
    
    
    
    </div>
  )
}
