import React, {useState, useEffect} from 'react'
import worldID from "@worldcoin/id";
import { Button } from 'antd';

export const WorldIDComponent = ({
    signal,
    actionId,
    setProof,
    enabled,
  }) => {
      const [ready, setReady] = useState(false)
    const enableWorldID = async () => {
      try {
        const result = await worldID.enable();
        setProof(result);
        console.log("World ID verified successfully: ", result);
      } catch (error) {
        console.error(error);
        // setTimeout(() => enableWorldID(), 500)
      }
    };
    useEffect(() => {
      const isInitialized = worldID.isInitialized()
      if (!isInitialized) {
        worldID.init("world-id-container", {
          actionId,
          signal,
        });
      }
      if (!worldID.isEnabled()) {
        enableWorldID().catch(e => console.error(e));
      }
    }, [ready]);

    useEffect(() => {
        if(worldID.isInitialized()) {
            worldID.update({signal, actionId})
        }
    }, [signal, actionId])

    return <div className={enabled ? '' : 'display-hidden'} id="world-id-container" />

  };