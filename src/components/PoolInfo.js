import React, {useState, useEffect} from 'react'
import { Button, Input, Statistic, Row, Col } from 'antd'
import {useParams} from "react-router-dom";
import { formatMoney, getExplorerUrl } from '../util';

// Main pool info page

export default function PoolInfo({user, address}  ) {
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
    <div>WorkPool: {poolId}&nbsp;

    Your Address: <a href={getExplorerUrl(address)} target="_blank">{address}</a>

    <Row>
        <Col span={16}></Col>
        <Col span={8}>
          <Statistic className='green'  title="Account Balance ($)" value={formatMoney(balance)} precision={2} />
        </Col>
    </Row>

    
    
    
    
    </div>
  )
}
