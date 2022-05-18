import React, {useState, useEffect} from 'react'
import { Button, Tabs, Input, Statistic, Card, Row, Col } from 'antd'
import {useParams} from "react-router-dom";
import { formatMoney, getExplorerUrl } from '../util';
import MintButton from './MintButton';
import InvestmentCard from './cards/InvestmentCard';

const { TabPane } = Tabs;

// Main pool info page

export default function PoolInfo({user, address}  ) {
    const [hasAccess, setHasAccess] = useState(true)
    const [balance, setBalance] = useState(1050)
    const [code, setCode] = useState()
    const [data, setData] = useState({})

    const callback = () => {}
    
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
            </Button>
        </div>
    }


    return (
    <div>
        <Row>
            <Col span={16}>
                        <h1>WorkPool: {poolId}</h1>

Your Address: <a href={getExplorerUrl(address)} target="_blank">{address}</a>

            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Dashboard" key="1">
                    <h1>Manage Investments</h1>
                        <InvestmentCard title="test"><p>hello</p></InvestmentCard>
                </TabPane>
                <TabPane tab="Badges" key="2">
                    <h3>Unlock collectible badges here as you hit key investment milestones.</h3>
                    <MintButton balance={balance} rewardBalance={1000}/>
                    <MintButton balance={balance} rewardBalance={5000}/>
                    <MintButton balance={balance} rewardBalance={10000}/>
                </TabPane>
                <TabPane tab="Calculator" key="3">
                    <h1>Interest Calculator</h1>
                </TabPane>
   
                <TabPane tab="Invite others" key="4">
                    <h1>Invite others to this WorkPool!</h1>

                    <p>Share url: {window.location.href}</p>
                </TabPane>
            </Tabs>
    
            </Col>
            <Col span={4}></Col>
            <Col span={4}>
            <Statistic className='green' title="Account Balance ($)" value={formatMoney(balance)} precision={2} />
            </Col>
        </Row>

        
    </div>
  )
}
