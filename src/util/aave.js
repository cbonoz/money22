import { Pool } from '@aave/contract-helpers';


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