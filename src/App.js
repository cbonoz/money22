import React, {useState, useEffect} from 'react'
import { Layout, Menu } from "antd";
import { APP_NAME } from "./util/constants";
import { Routes, Route, Link, Router } from "react-router-dom";
import About from "./components/About";

import logo from "./assets/logo.png";
import "antd/dist/antd.min.css";
import "./App.css";
import { useMoralis } from "react-moralis";

import FindPool from './components/FindPool';
import CreatePool from './components/CreatePool';
import { initWeb3, web3Provider } from './util/web3util';
import PoolInfo from './components/PoolInfo';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const { authenticate, isAuthenticated, user, logout  } = useMoralis();
  // const [user, setUser] = useState()
  console.log('user', user)

  const login = async () => {
    let u
    try {
      u = await authenticate({ provider: "metamask", chainId: 5 })
    } catch (e) {
      console.error('err logging in', e)
    }
    console.log('login', u)
    // const p = await initWeb3()
    // setUser(p)

    // const accounts = await web3Provider.listAccounts()
    // const balance = await web3Provider.getBalance()
    // console.log('web3', accounts, balance)
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
            {user && <Link to="/create">
                <Menu.Item key="2">Create Pool</Menu.Item>
              </Link>}
              {user && <Link to="/discover">
                <Menu.Item key="3">Find Pool</Menu.Item>
              </Link>}
              {user && <span>Active: {user.accounts && `${user.get('address')}**`}&nbsp;<a onClick={() => logout()}>Logout</a></span>}
          </Menu>
        </Header>
        <Content>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<About user={user} login={login}/>}/>
              <Route exact path="/create" element={<CreatePool user={user}/>}/>
              <Route exact path="/discover" element={<FindPool user={user} />} />
              <Route exact path="/pools/:poolId" element={<PoolInfo/>}/>
              {/* <Route exact path="/api" element={<Docs />} /> */}
              <Route exact path="/about" element={<About/>}/>
            </Routes>
          </div>
        </Content>
        <Footer>
          {APP_NAME} &copy;2022 - Built for the{" "}
          <a href="https://hackathon.money" target="_blank">
            HackMoney 2022
          </a>
          hackathon.
        </Footer>
      </Layout>
    </div>
  );
}

export default App;