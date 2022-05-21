import { Pool } from '@aave/contract-helpers';

// https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses
const poolAddress = "0x1758d4e6f68166C4B2d9d0F049F33dEB399Daa1F"
const wethGatewayAddress = "0x2a58E9bbb5434FdA7FF78051a4B82cb0EF669C17"

export const supply = async (provider, user, reserve, amount) => {
    const pool = new Pool(provider, {
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
    return txs
}

export const withdraw = async (provider, user, reserve, amount) => {
    const pool = new Pool(provider, {
        POOL: poolAddress,
        WETH_GATEWAY: wethGatewayAddress,
    });

    /*
    - @param `user` The ethereum address that will make the withdrawl 
    - @param `reserve` The ethereum address of the reserve 
    - @param `amount` The amount to be withdrawn 
    - @param @optional `onBehalfOf` The ethereum address for which user is depositing. It will default to the user address
    */
    const txs= await pool.withdraw({
    user,
    reserve,
    amount,
    onBehalfOf: undefined,
    });
    return txs
}