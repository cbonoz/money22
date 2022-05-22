import React, {useState, useEffect} from 'react'
import { Button, Modal, Tabs, Input, Statistic, Card, Row, Col, Collapse } from 'antd'
import {useParams, useNavigate } from "react-router-dom";
import { formatMoney, getExplorerUrl } from '../util';
import MintButton from './MintButton';
import Chat from './Chat';

// Main pool info page
import { PieChart } from 'react-chartkick'
import { AAVE_MUMBAI_RESERVE, APP_DESC, COVALENT_KEY, INITIAL_BALANCE, PIE_DATA } from '../util/constants';
// import { AMM } from '@voltz-protocol/v1-sdk/dist/types/entities';
import { checkCode } from '../contract/deploy';

import 'chartkick/chart.js'
import { supply, withdraw } from '../util/aave';
import { ACTIVE_COIN, getHistoricRates } from '../util/covalent';

const { Panel } = Collapse;
const { TabPane } = Tabs;

export default function PoolInfo({address}  ) {
    const [hasAccess, setHasAccess] = useState(false)
    const [balance, setBalance] = useState(INITIAL_BALANCE)
    const [code, setCode] = useState()
    const [amount, setAmount] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()
    const [data, setData] = useState({})
    const [rateModal, setRateModal] = useState(false)

    const viewRates = (e) => {
        e.preventDefault()
        setRateModal(true)
    }
    async function fetchRates() {
        setData({})
        try {
            const res = await getHistoricRates()
            setData(res.data)
        } catch (e) {
            console.error('rates error', e)
            setError('Error fetching rates: ' + e.toString())
        }
    }

    useEffect(() => {
        if (rateModal) {
            fetchRates()
        }
    }, [rateModal])

    const navigate = useNavigate()

    const deposit = async ()  => {
        setLoading(true)
        setError()
        try {
            await supply(address, AAVE_MUMBAI_RESERVE, amount)
        } catch (e) {
            console.error('err', e)
            setError(e.toString())
        } finally {
            setLoading(false)
        }
    }

    const withdrawl = async ()  => {
        setLoading(true)
        setError()
        try {
            await withdraw(address, AAVE_MUMBAI_RESERVE, amount)
        } catch (e) {
            console.error('err', e)
            setError(e.toString())
        } finally {
            setLoading(false)
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
                        &nbsp;
                        <Button className='standard-btn' onClick={withdrawl}>Remove funds</Button>&nbsp;

                        {COVALENT_KEY && <a href={"#"} onClick={viewRates}>View historic rates</a>}
                        {error && <p className='error-text'>{error}</p>}
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

        <Modal width={800} onCancel={() => setRateModal(false)} cancelButtonProps={{ style: { display: 'none' } }} title={`Aave Historic Rates (${ACTIVE_COIN})`} visible={rateModal} onOk={() => setRateModal(false)}>
            <p>Below are historic rates for the stablecoin {ACTIVE_COIN} on Aave for the most recent month. You can potentially use this as a baseline for determining if a good time to lend.</p>
            <pre>
                {JSON.stringify((data.data || {}).items, null, '\t')}
            </pre>
        </Modal>

        
    </div>
  )
}
