import React, { useEffect, useState } from "react";
import { Button, Steps } from "antd";
import { Row, Col } from "antd";
import { Typography, Divider } from "antd";


import logo from "./../assets/logo_3_2.png";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { APP_DESC, APP_NAME } from "../util/constants";
import { useNavigate } from "react-router";

const { Title, Paragraph, Text, Link } = Typography;
const { Step } = Steps;

const REASONS = [
  "Create a passive investing pool with your friends and colleagues",
  "Receive interest as you build and increase your investment stake",
  "Earn NFT rewards as you hit investment milestones",
];

function About({user, login}) {
  const navigate = useNavigate()
  return (
    <div className="content about-page">
      <Row>
        <Col span={12}>
          <br />
          <Title>{APP_NAME}</Title>
          <hr />
          <h3>{APP_DESC}</h3>
          <br />

          {REASONS.map((r, i) => {
            return (
              <div key={i} className='reason'>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
                &nbsp;
                {r}.
              </div>
            );
          })}
        </Col>
        <Col span={12}>
          <img src={logo} />
        </Col>
      </Row>

      <Row>
        <Button type="primary" size="large" onClick={user ? navigate('/create') : login}>{user ? 'Create Pool' : 'Login'}</Button>
        {user && <span>&nbsp;
        <Button type="secondary" size="large" onClick={() => navigate('/discover')}>Find Pool</Button>
          </span>}
      </Row>

      <p></p>
      {/* <img src={logo} className="hero-logo" /> */}
      {/* <Steps current={3} size="large" className="header-steps">
        <Step title="Stream" description="Stream from ContentStream or using your favorite existing platform." />
        <Step
          title="List"
          description="Use ContentStream to list and sell rights and access to your previous Streams."
        />
        <Step title="Earn" description="Get paid for your new and existing content." />
      </Steps> */}
    </div>
  );
}

export default About;