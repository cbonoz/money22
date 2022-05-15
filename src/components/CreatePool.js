import React, { useState, useEffect } from "react";
import { Button, Input, Row, Col, Radio, Steps, Result } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { signatureUrl, ipfsUrl, getExplorerUrl } from "../util";
import { EXAMPLE_FORM } from "../util/constants";
import { ethers } from "ethers";
import { validAddress, deployContract } from "../contract/deploy";
import { enableWorld, initWorld } from "../util/worldcoin";

const { Step } = Steps;

function CreatePool(props) {
  const [data, setData] = useState({ ...EXAMPLE_FORM });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const updateData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const init = async () => {
    await enableWorld()
    await initWorld()
  }

  useEffect(() => {
    init()
  }, [])

  const isValid = (data) => {
    return (
      data.title &&
      data.description &&
      data.files.length > 0 &&
      validAddress(data.signerAddress)
    );
  };
  const isValidData = isValid(data);

  const create = async () => {
    setError(undefined);

    if (!isValidData) {
      setError(
        "Please provide a title, description, valid address, and at least one file."
      );
      return;
    }

    setLoading(true);
    const body = { ...data };
    let res = { ...data };

    try {
      // 1) deploy base contract with metadata,
      const contract = await deployContract(data.title, data.signerAddress);
      res["contract"] = contract;

      // 2) Upload files to moralis/ipfs,
      // const metadata = await uploadFiles(
      //   files,
      //   data.title,
      //   data.description,
      //   data.signerAddress,
      //   contract.address
      // );
      const metadata = {}

      // 3) return shareable url.
      res["signatureUrl"] = signatureUrl(metadata.hash());
      res["hash"] = metadata.hash();
      res["contractUrl"] = getExplorerUrl(contract.address);

      // Result rendered after successful doc upload + contract creation.
      setResult(res);
      try {
        // await postPacket(res.workpool request);
      } catch (e) {
        console.error("error posting workpool request", e);
      }
    } catch (e) {
      console.error("error creating workpool request", e);
    } finally {
      setLoading(false);
    }
  };

  const getStep = () => {
    if (!!result) {
      return 2;
    } else if (isValidData) {
      return 1;
    }
    return 0;
  };

  return (
    <div>
      <Row>
        <Col span={16}>
          <div className="create-form white boxed">
            <h2>Create new workpool request</h2>
            <div id="world-id-container"></div>

            <br />

            <h3 className="vertical-margin">workpool request title:</h3>
            <Input
              placeholder="Title of the workpool request"
              value={data.title}
              prefix="Title:"
              onChange={(e) => updateData("title", e.target.value)}
            />
            <TextArea
              aria-label="Description"
              onChange={(e) => updateData("description", e.target.value)}
              placeholder="Description of the workpool request"
              prefix="Description"
              value={data.description}
            />

            <h3 className="vertical-margin">Enter signer address:</h3>
            <p>
              In order to sign or agree to the documents, the viewer or
              potential signer of the documents must prove ownership of a
              particular address
            </p>
            <Input
              placeholder="Wallet address of signer"
              value={data.signerAddress}
              prefix="Signer Address:"
              onChange={(e) => updateData("signerAddress", e.target.value)}
            />
            <br />

            <Button
              type="primary"
              className="standard-button"
              onClick={create}
              disabled={loading} // || !isValidData}
              loading={loading}
            >
              Create workpool request!
            </Button>
            {!error && !result && loading && (
              <span>&nbsp;Note this may take a few moments.</span>
            )}
            <br />
            <br />
            {error && <div className="error-text">{error}</div>}
            {result && (
              <div>
                <Result
                  status="success"
                  title="Successfully created WorkPool!"
                  subTitle="It may take a moment for your contract to be confirmed."
                />
                <a href={ipfsUrl(result.hash)} target="_blank">
                  View metadata
                </a>
                <br />
                <a href={result.contractUrl} target="_blank">
                  View created contract
                </a>
                <br />
                <br />
                <p>
                  Share this url with the potential signer:
                  <br />
                  <a href={result.signatureUrl} target="_blank">
                    Open workpool url
                  </a>
                </p>

                {/* <div>{JSON.stringify(result, null, "\t")}</div> */}
              </div>
            )}
          </div>
        </Col>
        <Col span={1}></Col>
        <Col span={7}>
          <div className="white boxed">
            <Steps
              className="standard-margin"
              direction="vertical"
              size="small"
              current={getStep()}
            >
              <Step title="Fill in fields" description="Enter required data." />
              <Step
                title="Create workpool request"
                description="Requires authorizing a create workpool request operation."
              />
              <Step
                title="Wait for workpool"
                description="Your workpool request will be live for others to view and submit workpool."
              />
            </Steps>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CreatePool