import React, {useState, useEffect} from 'react'
import { Button, Layout, Menu } from "antd";
import { APP_NAME  } from "./util/constants";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import FindPool from './components/FindPool';
import CreatePool from './components/CreatePool';
// import { initWeb3, web3Provider } from './util/web3util';
import PoolInfo from './components/PoolInfo';
import logo from "./assets/logo.png";
import { initWeb3 } from './util/web3util';

import "antd/dist/antd.min.css";
import "./App.css";
import { getProvider } from './contract/deploy';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  const [address, setAddress]= useState()

  
  const logout = async () => {
    console.log('logout')
    try {
      // await window.ethereum.request({
      //   method: "eth_requestAccounts",
      //   params: [{eth_accounts: {}}]
      // })
      const p  = await getProvider()
      await p.provider.disconnect()
      console.log('logout')
    } catch (e) {
      console.error('e', e)
      // Catch error
    }
    setAddress(undefined)
  }
 
  async function login() {
     const p = await initWeb3()
     const addr = p.provider.accounts[0]
     console.log('addr', p, addr)
     setAddress(addr)
  }
 
  useEffect(() => {
    login()
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