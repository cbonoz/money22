import React, {useState, useEffect} from 'react'
import { Button, Tabs, Input, Statistic, Card, Row, Col, Collapse } from 'antd'
import {useParams, useNavigate, useLocation} from "react-router-dom";
import { formatMoney, getExplorerUrl } from '../util';
import MintButton from './MintButton';
import InvestmentCard from './cards/InvestmentCard';
import Chat from './Chat';

// Main pool info page
import { PieChart } from 'react-chartkick'
import { AAVE_MUMBAI_RESERVE, APP_DESC, INITIAL_BALANCE, PIE_DATA } from '../util/constants';
// import { AMM } from '@voltz-protocol/v1-sdk/dist/types/entities';
import { checkCode, getProvider, getSigner } from '../contract/deploy';

import 'chartkick/chart.js'
import { supply } from '../util/aave';

const { Panel } = Collapse;
const { TabPane } = Tabs;

export default function PoolInfo({address}  ) {
    const [hasAccess, setHasAccess] = useState(false)
    const [balance, setBalance] = useState(INITIAL_BALANCE)
    const [code, setCode] = useState()
    const [amount, setAmount] = useState()
    const [error, setError] = useState()
    const [data, setData] = useState({})

    const navigate = useNavigate()

    // TODO: add aave supply action.

    const deposit = async ()  => {
        try {
            await supply(await getProvider(), address, AAVE_MUMBAI_RESERVE, amount)
        } catch (e) {
            console.error('err', e)
        }
    }

    const callback = () => {}
    
    const { poolId } = useParams()

    const check = async () => {
        setError()
        try {
            const res = await checkCode(poolId, code)
            console.log('result', res)
            setHasAccess(true)
        } catch (e) {
            setHasAccess(false)
            console.error('err', e)
            setError('Invalid code')
        }
        // TODO: add access check logic.
    }

    useEffect(() => {

    })


    if (!hasAccess) {
        return <div>
            <h3>Enter pool access code</h3>
            <Input prefix="Enter code:" type="password"  className='standard-input' code={code} onChange={e => {
                setCode(e.target.value)
            }}/>
            <Button type="primary"  className='standard-btn' onClick={check} disabled={!code}> 
                Access
            </Button>
            <br/>
            {error && <p className='error-text'>{error}</p>}
        </div>
    }

    return (
    <div>
        <Row>
            <Col span={24}>
                        <h1>Welcome! WorkPool: <a href={getExplorerUrl(poolId)} target="_blank">{poolId.slice(0,6)}</a></h1>

Your Address: <a href={getExplorerUrl(address)} target="_blank">{address}</a>

            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Dashboard" key="1">
                    <h1>Manage Investments</h1>
                    <p>Select fixed-income and other lower-volatility investments.</p>
                    <Statistic className='green' title="Account Balance ($)" value={formatMoney(balance)} precision={2} />
                    <PieChart prefix="$" thousands="," precision={2} donut={true} data={PIE_DATA}  label="Value" legend={true}  width="100%" height="400px" />
                    <br/>
                    <h3>Funds:</h3>
                    <Collapse accordion>
                
                    <Panel header="Aave" width="100%" key="2">
                        <Input className='input' suffix="MATIC" prefix={'Amount to deposit'} value={amount} onChange={e => setAmount(e.target.value)}/>
                        <br/>

                        <Button className='standard-btn' type="primary" onClick={deposit}>Add funds</Button>
                        {/* <Button className='standard-btn' onClick={withdraw}>Remove funds</Button> */}
                    </Panel>
                    <Panel header="Tempus" width="100%" key="1">
                        <iframe src={"https://testnet.tempus.finance/"}  width="100%" height="600"/>
                    </Panel>
                </Collapse>
                </TabPane>
                <TabPane tab="Badges" key="2">
                    <h3>Unlock collectible badges here as you hit key investment milestones.</h3>
                    <p>You can mint as many of these as you like once you hit the threshold.</p>
                    <MintButton balance={balance} rewardBalance={1000}/>
                    <MintButton balance={balance} rewardBalance={5000}/>
                    <MintButton balance={balance} rewardBalance={10000}/>
                </TabPane>
                {/* <TabPane tab="Calculator" key="3">
                    <h1>Interest Calculator</h1>
                </TabPane> */}
                <TabPane tab="Chat" key="3">
                    <h1>Group chat</h1>
                    <p>Chat with other individuals that have access to this pool.</p>
                    <Chat address={address}/>
                </TabPane>
   
                <TabPane tab="Invite others" key="4">
                    <h1>Invite others to this WorkPool!</h1>

                    <p>Share url: {window.location.href}</p>
                </TabPane>
            </Tabs>
    
            </Col>
            {/* <Col span={4}></Col>
            <Col span={4}> */}
            {/* </Col> */}
        </Row>

        
    </div>
  )
}
