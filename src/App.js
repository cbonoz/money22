import React, {useState, useEffect} from 'react'
import { Button, Layout, Menu } from "antd";
import { APP_NAME, MORALIS, MORALIS_ID, MORALIS_SERVER } from "./util/constants";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import FindPool from './components/FindPool';
import CreatePool from './components/CreatePool';
// import { initWeb3, web3Provider } from './util/web3util';
import PoolInfo from './components/PoolInfo';
import Moralis from "moralis";
import logo from "./assets/logo.png";
import { getExistingAddress, initWeb3 } from './util/web3util';

import "antd/dist/antd.min.css";
import "./App.css";
import { getAddress } from 'ethers/lib/utils';

const { Header, Footer, Sider, Content } = Layout;
// const MORALIS = false; // Enable for production backend storage.

function App() {
  // const { authenticate, isAuthenticated, address, logout  } = useMoralis();
  const [address, setAddress]= useState()
  const [provider ,setProvider] = useState()

  
  const logout = async () => {
    console.log('logout')
    if (MORALIS) {
      await Moralis.User.logOut();
    }
    setAddress(undefined)
  }
 
  async function login() {
    if (MORALIS) {
    let u = Moralis.address.current();
    if (!u) {
     try {
       console.log('authenticate')
        // u = await Moralis.authenticate({ provider: 'walletconnect' })j
        u = await Moralis.authenticate()
        const addr = u.get('ethAddress')
        setAddress(addr)
        console.log('addr',  addr)
     } catch(error) {
       console.log('err', error)
     }
    }
   } else {
     const p = await initWeb3()
     const addr = p.provider.accounts[0]
     console.log('addr', p, addr)
     setAddress(addr)
   }
  }
 
  useEffect(() => {
    const body = {serverUrl: MORALIS_SERVER, appId: MORALIS_ID}
    console.log('init moralis', body)
    if (MORALIS) {
      Moralis.start(body)
      let u = Moralis.address.current() 
      if (u) {
        setAddress(u.get('ethAddress'))
      }
    }  else {
      login()
    }
  }, [])

  console.log('addr', address)

  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Link to="/">
              <Menu.Item key="0">
                <img src={logo} className="header-image" />
              </Menu.Item>
            </Link>
            {!address && <Link to="/">
              <Menu.Item key="1">Get Started</Menu.Item>
            </Link>}
            {!address && <span>
              <Button type="secondary" onClick={login}>Connect wallet</Button>
            </span>}
            {address && <Link to="/create">
                <Menu.Item key="2">Create Pool</Menu.Item>
              </Link>}
              {address && <Link to="/discover">
                <Menu.Item key="3">Access Pool</Menu.Item>
              </Link>}
              {address && <span>Active: {address.substr(0,6)}**&nbsp;<a onClick={() => logout()}>Logout</a></span>}
          </Menu>
        </Header>
        <Content>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<About address={address} login={login}/>}/>
              <Route exact path="/create" element={<CreatePool address={address} />}/>
              <Route exact path="/discover" element={<FindPool address={address} />} />
              <Route exact path="/pool/:poolId" element={<PoolInfo address={address} />}/>
              {/* <Route exact path="/api" element={<Docs />} /> */}
              <Route exact path="/about" element={<About/>}/>
            </Routes>
          </div>
        </Content>
        <Footer>
          {APP_NAME} &copy;2022 - 
          {/* Built for the{" "}
          <a href="https://hackathon.money" target="_blank">
            HackMoney 2022
          </a>&nbsp;
          hackathon. */}
        </Footer>
      </Layout>
    </div>
  );
}

export default App;