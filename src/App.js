import React, {useState, useEffect} from 'react'
import { Button, Layout, Menu } from "antd";
import { ACTIVE_CHAIN_ID, APP_NAME, MORALIS_ID, MORALIS_SERVER } from "./util/constants";
import { Routes, Route, Link, Router } from "react-router-dom";
import About from "./components/About";

import logo from "./assets/logo.png";
import "antd/dist/antd.min.css";
import "./App.css";
import {web3Provider} from './contract/deploy'

import FindPool from './components/FindPool';
import CreatePool from './components/CreatePool';
// import { initWeb3, web3Provider } from './util/web3util';
import PoolInfo from './components/PoolInfo';
import Moralis from "moralis";

const { Header, Footer, Sider, Content } = Layout;
// const MORALIS = false; // Enable for production backend storage.

function App() {
  // const { authenticate, isAuthenticated, user, logout  } = useMoralis();
  const [user, setUser] = useState()
  console.log('user', user)

  const logout = async () => {
    console.log('logout')
    await Moralis.User.logOut();
    setUser(undefined)
  }
  
  useEffect(() => {
    const body = {serverUrl: MORALIS_SERVER, appId: MORALIS_ID}
    console.log('init moralis', body)
    Moralis.start(body)
    let u = Moralis.User.current() 
    if (u) {
      setUser(u)
      console.log('existing user', u, u.get('ethAddress'))
    }
  }, [])

  async function login() {
    let u = Moralis.User.current();

    if (!u) {
     try {
       console.log('authenticate')
        u = await Moralis.authenticate({ provider: 'walletconnect', chainId: 42 })
        console.log('user', u, u.get('ethAddress'))
        setUser(u)
     } catch(error) {
       console.log('err', error)
     }
    }
  }

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
            {!user && <Link to="/">
              <Menu.Item key="1">Get Started</Menu.Item>
            </Link>}
            {!user && <span>
              <Button  type="secondary" onClick={login}>Connect wallet</Button>
            </span>}
            {user && <Link to="/create">
                <Menu.Item key="2">Create Pool</Menu.Item>
              </Link>}
              {user && <Link to="/discover">
                <Menu.Item key="3">Access Pool</Menu.Item>
              </Link>}
              {user && <span>Active: {user && user.get('ethAddress').substr(0,6)}**&nbsp;<a onClick={() => logout()}>Logout</a></span>}
          </Menu>
        </Header>
        <Content>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<About user={user} login={login}/>}/>
              <Route exact path="/create" element={<CreatePool user={user} address={user && user.get('ethAddress')}/>}/>
              <Route exact path="/discover" element={<FindPool user={user} />} />
              <Route exact path="/pool/:poolId" element={<PoolInfo user={user} address={user && user.get('ethAddress')}/>}/>
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