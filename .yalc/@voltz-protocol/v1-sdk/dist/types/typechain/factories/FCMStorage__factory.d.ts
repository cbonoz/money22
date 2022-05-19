import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { FCMStorage, FCMStorageInterface } from "../FCMStorage";
export declare class FCMStorage__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<FCMStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): FCMStorage;
    connect(signer: Signer): FCMStorage__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610122806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80632495a59914603757806392a88fa2146066575b600080fd5b6004546049906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b609d607136600460be565b600360208190526000918252604090912080546001820154600283015492909301549092919060ff1684565b6040805194855260208501939093529183015215156060820152608001605d565b60006020828403121560cf57600080fd5b81356001600160a01b038116811460e557600080fd5b939250505056fea2646970667358221220e0c397527124aae08ce47ebb4b0bee8c9dc6ca2ba2f9ecb5f18e6f811b3cf7ca64736f6c63430008090033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): FCMStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FCMStorage;
}
//# sourceMappingURL=FCMStorage__factory.d.ts.map