import React, {useState} from 'react'
import { Layout, Menu } from "antd";
import { APP_NAME } from "./util/constants";
import { Routes, Route, Link, Router } from "react-router-dom";
import About from "./components/About";

import logo from "./assets/logo.png";
import "antd/dist/antd.min.css";
import "./App.css";
import FindPool from './components/FindPool';
import CreatePool from './components/CreatePool';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [user, setUser] = useState()
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
            <Link to="/create">
              <Menu.Item key="2">Create Pool</Menu.Item>
            </Link>
            <Link to="/discover">
              <Menu.Item key="3">Find Pool</Menu.Item>
            </Link>
            {user && <span>Active: {user.email}&nbsp;<a onClick={() => setUser(undefined)}>Logout</a></span>}
          </Menu>
        </Header>
        <Content>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<About/>}/>
              <Route exact path="/create" element={<CreatePool user={user}/>}/>
              <Route exact path="/discover" element={<FindPool user={user} />} />
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