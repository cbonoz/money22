import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import { Row, Col } from "antd";
import { Typography, Divider } from "antd";


import logo from "./../assets/logo_3_2.png";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { APP_DESC, APP_NAME } from "../util/constants";

const { Title, Paragraph, Text, Link } = Typography;
const { Step } = Steps;

const REASONS = [
  "No subscription or credit card fees required",
  "Use table side or as your own showcase with free hosting",
  "Accept cryptocurrency as payment",
];

function About(props) {
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
              <div key={i}>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
                &nbsp;
                {r}
              </div>
            );
          })}
        </Col>
        <Col span={12}>
          <img src={logo} />
        </Col>
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