import React, { useState, useEffect, useMemo } from "react";
import { Button, Input, Row, Col, Radio, Steps, Result, Checkbox } from "antd";
import { signatureUrl, ipfsUrl, getExplorerUrl, poolUrl } from "../util";
import { EXAMPLE_FORM } from "../util/constants";
import { deployContract } from "../contract/deploy";
import FindCompany from "./FindCompany";
import { WorldIDComponent } from "./WorldIDComponent";
import { savePool } from "../util/moral";

const { Step } = Steps;

function CreatePool({address, user}) {
  const [data, setData] = useState({ ...EXAMPLE_FORM });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const updateData = (key, value) => {
    console.log('update', data)
    setData({ ...data, [key]: value });
  };

  const onChange = e => {
    console.log('checked = ', e.target.checked);
    updateData('worldId', e.target.checked);
  };

  const actionId = `${data.domain}-${data.title}`

  const isValid = (data) => {
    return (
      data.title &&
      data.code &&
      data.domain
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
      const contract = await deployContract(data.domain, data.title, data.code);
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
      res["cid"] = res.cid || contract.address
      // res["hash"] = metadata.hash();
      res["contractUrl"] = getExplorerUrl(contract.address);
      res["poolUrl"] = poolUrl(contract.address)

      // Result rendered after successful doc upload + contract creation.
      setResult(res);
      try {
        await savePool(res)
      } catch (e) {
        console.error("error saving WorkPool", e);
      }
    } catch (e) {
      console.error("error creating WorkPool", e);
    } finally {
      setLoading(false);
    }
  };

  const activeStep = useMemo(() => {
    if (!!result) {
      return 2;
    } else if (isValidData) {
      return 1;
    }
    return 0;
  }, [result, isValidData]);

  return (
    <div>
      <Row>
        <Col span={16}>
          <div className="create-form white boxed">
            <h1>Create new WorkPool</h1>

            <FindCompany update={(d) => updateData('domain', d)}/>

            <h3 className="vertical-margin">General information</h3>
            <Input
              placeholder="Title of the WorkPool"
              value={data.title}
              prefix="Title:"
              className="standard-input"
              onChange={(e) => updateData("title", e.target.value)}
            />
            <Input
              aria-label="Access Code"
              onChange={(e) => updateData("code", e.target.value)}
              placeholder="Enter access code for the pool"
              prefix="Access code:"
              className="standard-input"
              value={data.code}
            />

            <Input
            className="standard-input"
              aria-label="Your address:"
              placeholder="Enter access code for the pool"
              disabled={true}
              prefix="Your address"
              value={address}
            />
            <br />
            <br />

            <Checkbox disabled={false} checked={data.worldId} onChange={onChange}>
              Enable ID Verification
            </Checkbox>
            <br/>
            <br />

            <WorldIDComponent enabled={data.worldId} signal={address} actionId={actionId} setProof={p => updateData('proof', p)}/>
            <br />
            {data.worldId && <p>Or authenticate <a href="https://mock-app.id.worldcoin.org/" target="_blank">here</a>. To reduce fraudulent or fake pools, WorldID can validate that the given user can only create a pool for the given organization once.</p>}


            <Button
              type="primary"
              className="standard-button"
              onClick={create}
              disabled={loading} // || !isValidData}
              loading={loading}
            >
              Create!
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
                {/* <a href={ipfsUrl(result.hash)} target="_blank">
                  View metadata
                </a> */}
                <br />
                <a href={result.contractUrl} target="_blank">
                  View created contract
                </a>
                <br />
                <br />
                <p>
                  Share this url with the potential signer:
                  <br />
                  <a href={result.poolUrl} target="_blank">
                    Open WorkPool url
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
              current={activeStep}
            >
              <Step title="Fill in fields" description="Enter required data." />
              <Step
                title="Create WorkPool"
                description="Create the initial contract and shareable url for peers to join"
              />
              <Step
                title="Invite others to join"
                description="Your WorkPool will be live for you and others to view and invest together."
              />
            </Steps>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CreatePool