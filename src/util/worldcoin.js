import worldID from "@worldcoin/id";

// https://id.worldcoin.org/docs/quick-start
export const enableWorld = async () => {
    let result = false;
    try {
        const result = await worldID.enable();
        console.log("World ID verified succesfully:", result); // <- Pass this result to your wallet transaction
        result = true
      } catch (failure) {
        console.warn("World ID verification failed:", failure);
        // Re-activate here so your end user can try again
      }
      return result
}

export const initWorld = async (contractAddress, userWalletAddress) => {
   
    worldID.init("world-id-container", {
        enableTelemetry: true,
        actionId: contractAddress || 'X', // <- use the address of your smart contract
        signal: userWalletAddress || 'Y', // <- Fill in with the user's wallet address here
    });
}