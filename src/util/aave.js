import { Pool } from '@aave/contract-helpers';
import { getProvider } from '../contract/deploy';
import { BigNumber, providers } from 'ethers';

// https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses
const poolAddress = "0x1758d4e6f68166C4B2d9d0F049F33dEB399Daa1F"
const wethGatewayAddress = "0x2a58E9bbb5434FdA7FF78051a4B82cb0EF669C17"


async function submitTransaction(
  provider,
  tx,
){
  const extendedTxData = await tx.tx();
  const { from, ...txData } = extendedTxData;
  const signer = provider.getSigner(from);
  const txResponse = await signer.sendTransaction({
    ...txData,
    value: txData.value ? BigNumber.from(txData.value) : undefined,
  });
  return txResponse
}

export const supply = async (user, reserve, amount) => {
    const p = await getProvider()
    const pool = new Pool(p, {
        POOL: poolAddress,
        WETH_GATEWAY: wethGatewayAddress,
    });

    /*
    - @param `user` The ethereum address that will make the deposit 
    - @param `reserve` The ethereum address of the reserve 
    - @param `amount` The amount to be deposited 
    - @param @optional `onBehalfOf` The ethereum address for which user is depositing. It will default to the user address
    */
    const txs= await pool.supply({
    user,
    reserve,
    amount,
    onBehalfOf: undefined,
    });
    // const signer = await p.getSigner()
    for (let i in txs) {
        const tx = txs[i]
        const res = await submitTransaction(p, tx)
        console.log('res', tx, res)
    }
}

export const withdraw = async (user, reserve, amount) => {
    const p = await getProvider()
    const pool = new Pool(p, {
        POOL: poolAddress,
        WETH_GATEWAY: wethGatewayAddress,
    });

    const txs= await pool.withdraw({
    user,
    reserve,
    amount,
    onBehalfOf: undefined,
    });
    // const signer = await p.getSigner()
    for (let i in txs) {
        const tx = txs[i]
        const res = await submitTransaction(p, tx)
        console.log('res', tx, res)
    }
}