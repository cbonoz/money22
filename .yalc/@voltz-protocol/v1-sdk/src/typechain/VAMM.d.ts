/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface VAMMInterface extends ethers.utils.Interface {
  functions: {
    "MAX_FEE()": FunctionFragment;
    "burn(address,int24,int24,uint128)": FunctionFragment;
    "computeGrowthInside(int24,int24)": FunctionFragment;
    "factory()": FunctionFragment;
    "feeGrowthGlobalX128()": FunctionFragment;
    "feeWad()": FunctionFragment;
    "fixedTokenGrowthGlobalX128()": FunctionFragment;
    "initialize(address,int24)": FunctionFragment;
    "initializeVAMM(uint160)": FunctionFragment;
    "isAlpha()": FunctionFragment;
    "liquidity()": FunctionFragment;
    "marginEngine()": FunctionFragment;
    "maxLiquidityPerTick()": FunctionFragment;
    "mint(address,int24,int24,uint128)": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "protocolFees()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFee(uint256)": FunctionFragment;
    "setFeeProtocol(uint8)": FunctionFragment;
    "setIsAlpha(bool)": FunctionFragment;
    "swap((address,int256,uint160,int24,int24))": FunctionFragment;
    "tickBitmap(int16)": FunctionFragment;
    "tickSpacing()": FunctionFragment;
    "ticks(int24)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateProtocolFees(uint256)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "vammVars()": FunctionFragment;
    "variableTokenGrowthGlobalX128()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "MAX_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "computeGrowthInside",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeGrowthGlobalX128",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "feeWad", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fixedTokenGrowthGlobalX128",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeVAMM",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isAlpha", values?: undefined): string;
  encodeFunctionData(functionFragment: "liquidity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "marginEngine",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxLiquidityPerTick",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "protocolFees",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeProtocol",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setIsAlpha", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tickBitmap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tickSpacing",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ticks", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateProtocolFees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "vammVars", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "variableTokenGrowthGlobalX128",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "MAX_FEE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "computeGrowthInside",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeGrowthGlobalX128",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeWad", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fixedTokenGrowthGlobalX128",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeVAMM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isAlpha", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marginEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxLiquidityPerTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeProtocol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setIsAlpha", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tickBitmap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tickSpacing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ticks", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateProtocolFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vammVars", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "variableTokenGrowthGlobalX128",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Burn(address,address,int24,int24,uint128)": EventFragment;
    "Fee(uint256)": EventFragment;
    "FeeProtocol(uint8)": EventFragment;
    "IsAlpha(bool)": EventFragment;
    "Mint(address,address,int24,int24,uint128)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Swap(address,address,int24,int24,int256,uint160,uint256,int256,int256,int256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Upgraded(address)": EventFragment;
    "VAMMInitialization(uint160,int24)": EventFragment;
    "VAMMPriceChange(int24)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Fee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeProtocol"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IsAlpha"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VAMMInitialization"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VAMMPriceChange"): EventFragment;
}

export type AdminChangedEvent = TypedEvent<
  [string, string] & { previousAdmin: string; newAdmin: string }
>;

export type BeaconUpgradedEvent = TypedEvent<[string] & { beacon: string }>;

export type BurnEvent = TypedEvent<
  [string, string, number, number, BigNumber] & {
    sender: string;
    owner: string;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
  }
>;

export type FeeEvent = TypedEvent<[BigNumber] & { feeWad: BigNumber }>;

export type FeeProtocolEvent = TypedEvent<[number] & { feeProtocol: number }>;

export type IsAlphaEvent = TypedEvent<[boolean] & { __isAlpha: boolean }>;

export type MintEvent = TypedEvent<
  [string, string, number, number, BigNumber] & {
    sender: string;
    owner: string;
    tickLower: number;
    tickUpper: number;
    amount: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type SwapEvent = TypedEvent<
  [
    string,
    string,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    sender: string;
    recipient: string;
    tickLower: number;
    tickUpper: number;
    desiredNotional: BigNumber;
    sqrtPriceLimitX96: BigNumber;
    cumulativeFeeIncurred: BigNumber;
    fixedTokenDelta: BigNumber;
    variableTokenDelta: BigNumber;
    fixedTokenDeltaUnbalanced: BigNumber;
  }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export type UpgradedEvent = TypedEvent<[string] & { implementation: string }>;

export type VAMMInitializationEvent = TypedEvent<
  [BigNumber, number] & { sqrtPriceX96: BigNumber; tick: number }
>;

export type VAMMPriceChangeEvent = TypedEvent<[number] & { tick: number }>;

export class VAMM extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: VAMMInterface;

  functions: {
    MAX_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    computeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        fixedTokenGrowthInsideX128: BigNumber;
        variableTokenGrowthInsideX128: BigNumber;
        feeGrowthInsideX128: BigNumber;
      }
    >;

    factory(overrides?: CallOverrides): Promise<[string]>;

    feeGrowthGlobalX128(overrides?: CallOverrides): Promise<[BigNumber]>;

    feeWad(overrides?: CallOverrides): Promise<[BigNumber]>;

    fixedTokenGrowthGlobalX128(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      __marginEngine: string,
      __tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeVAMM(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAlpha(overrides?: CallOverrides): Promise<[boolean]>;

    liquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    marginEngine(overrides?: CallOverrides): Promise<[string]>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    protocolFees(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFee(
      newFeeWad: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeProtocol(
      feeProtocol: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIsAlpha(
      __isAlpha: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tickSpacing(overrides?: CallOverrides): Promise<[number]>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
          liquidityGross: BigNumber;
          liquidityNet: BigNumber;
          fixedTokenGrowthOutsideX128: BigNumber;
          variableTokenGrowthOutsideX128: BigNumber;
          feeGrowthOutsideX128: BigNumber;
          initialized: boolean;
        }
      ]
    >;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateProtocolFees(
      protocolFeesCollected: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vammVars(
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, number, number] & {
          sqrtPriceX96: BigNumber;
          tick: number;
          feeProtocol: number;
        }
      ]
    >;

    variableTokenGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  computeGrowthInside(
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      fixedTokenGrowthInsideX128: BigNumber;
      variableTokenGrowthInsideX128: BigNumber;
      feeGrowthInsideX128: BigNumber;
    }
  >;

  factory(overrides?: CallOverrides): Promise<string>;

  feeGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

  feeWad(overrides?: CallOverrides): Promise<BigNumber>;

  fixedTokenGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    __marginEngine: string,
    __tickSpacing: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeVAMM(
    sqrtPriceX96: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAlpha(overrides?: CallOverrides): Promise<boolean>;

  liquidity(overrides?: CallOverrides): Promise<BigNumber>;

  marginEngine(overrides?: CallOverrides): Promise<string>;

  maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    recipient: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  protocolFees(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFee(
    newFeeWad: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeProtocol(
    feeProtocol: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIsAlpha(
    __isAlpha: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    params: {
      recipient: string;
      amountSpecified: BigNumberish;
      sqrtPriceLimitX96: BigNumberish;
      tickLower: BigNumberish;
      tickUpper: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tickBitmap(
    wordPosition: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tickSpacing(overrides?: CallOverrides): Promise<number>;

  ticks(
    tick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
      liquidityGross: BigNumber;
      liquidityNet: BigNumber;
      fixedTokenGrowthOutsideX128: BigNumber;
      variableTokenGrowthOutsideX128: BigNumber;
      feeGrowthOutsideX128: BigNumber;
      initialized: boolean;
    }
  >;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateProtocolFees(
    protocolFeesCollected: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vammVars(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number] & {
      sqrtPriceX96: BigNumber;
      tick: number;
      feeProtocol: number;
    }
  >;

  variableTokenGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        fixedTokenGrowthInsideX128: BigNumber;
        variableTokenGrowthInsideX128: BigNumber;
        feeGrowthInsideX128: BigNumber;
      }
    >;

    factory(overrides?: CallOverrides): Promise<string>;

    feeGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    feeWad(overrides?: CallOverrides): Promise<BigNumber>;

    fixedTokenGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      __marginEngine: string,
      __tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeVAMM(
      sqrtPriceX96: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isAlpha(overrides?: CallOverrides): Promise<boolean>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    marginEngine(overrides?: CallOverrides): Promise<string>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    protocolFees(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFee(newFeeWad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setFeeProtocol(
      feeProtocol: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setIsAlpha(__isAlpha: boolean, overrides?: CallOverrides): Promise<void>;

    swap(
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        fixedTokenDelta: BigNumber;
        variableTokenDelta: BigNumber;
        cumulativeFeeIncurred: BigNumber;
        fixedTokenDeltaUnbalanced: BigNumber;
        marginRequirement: BigNumber;
      }
    >;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<number>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean] & {
        liquidityGross: BigNumber;
        liquidityNet: BigNumber;
        fixedTokenGrowthOutsideX128: BigNumber;
        variableTokenGrowthOutsideX128: BigNumber;
        feeGrowthOutsideX128: BigNumber;
        initialized: boolean;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateProtocolFees(
      protocolFeesCollected: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    vammVars(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        feeProtocol: number;
      }
    >;

    variableTokenGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      { previousAdmin: string; newAdmin: string }
    >;

    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      { previousAdmin: string; newAdmin: string }
    >;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): TypedEventFilter<[string], { beacon: string }>;

    BeaconUpgraded(
      beacon?: string | null
    ): TypedEventFilter<[string], { beacon: string }>;

    "Burn(address,address,int24,int24,uint128)"(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, number, number, BigNumber],
      {
        sender: string;
        owner: string;
        tickLower: number;
        tickUpper: number;
        amount: BigNumber;
      }
    >;

    Burn(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, number, number, BigNumber],
      {
        sender: string;
        owner: string;
        tickLower: number;
        tickUpper: number;
        amount: BigNumber;
      }
    >;

    "Fee(uint256)"(
      feeWad?: null
    ): TypedEventFilter<[BigNumber], { feeWad: BigNumber }>;

    Fee(feeWad?: null): TypedEventFilter<[BigNumber], { feeWad: BigNumber }>;

    "FeeProtocol(uint8)"(
      feeProtocol?: null
    ): TypedEventFilter<[number], { feeProtocol: number }>;

    FeeProtocol(
      feeProtocol?: null
    ): TypedEventFilter<[number], { feeProtocol: number }>;

    "IsAlpha(bool)"(
      __isAlpha?: null
    ): TypedEventFilter<[boolean], { __isAlpha: boolean }>;

    IsAlpha(
      __isAlpha?: null
    ): TypedEventFilter<[boolean], { __isAlpha: boolean }>;

    "Mint(address,address,int24,int24,uint128)"(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, number, number, BigNumber],
      {
        sender: string;
        owner: string;
        tickLower: number;
        tickUpper: number;
        amount: BigNumber;
      }
    >;

    Mint(
      sender?: null,
      owner?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, number, number, BigNumber],
      {
        sender: string;
        owner: string;
        tickLower: number;
        tickUpper: number;
        amount: BigNumber;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Swap(address,address,int24,int24,int256,uint160,uint256,int256,int256,int256)"(
      sender?: null,
      recipient?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      desiredNotional?: null,
      sqrtPriceLimitX96?: null,
      cumulativeFeeIncurred?: null,
      fixedTokenDelta?: null,
      variableTokenDelta?: null,
      fixedTokenDeltaUnbalanced?: null
    ): TypedEventFilter<
      [
        string,
        string,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
        sender: string;
        recipient: string;
        tickLower: number;
        tickUpper: number;
        desiredNotional: BigNumber;
        sqrtPriceLimitX96: BigNumber;
        cumulativeFeeIncurred: BigNumber;
        fixedTokenDelta: BigNumber;
        variableTokenDelta: BigNumber;
        fixedTokenDeltaUnbalanced: BigNumber;
      }
    >;

    Swap(
      sender?: null,
      recipient?: string | null,
      tickLower?: BigNumberish | null,
      tickUpper?: BigNumberish | null,
      desiredNotional?: null,
      sqrtPriceLimitX96?: null,
      cumulativeFeeIncurred?: null,
      fixedTokenDelta?: null,
      variableTokenDelta?: null,
      fixedTokenDeltaUnbalanced?: null
    ): TypedEventFilter<
      [
        string,
        string,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
        sender: string;
        recipient: string;
        tickLower: number;
        tickUpper: number;
        desiredNotional: BigNumber;
        sqrtPriceLimitX96: BigNumber;
        cumulativeFeeIncurred: BigNumber;
        fixedTokenDelta: BigNumber;
        variableTokenDelta: BigNumber;
        fixedTokenDeltaUnbalanced: BigNumber;
      }
    >;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Upgraded(address)"(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;

    Upgraded(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;

    "VAMMInitialization(uint160,int24)"(
      sqrtPriceX96?: null,
      tick?: null
    ): TypedEventFilter<
      [BigNumber, number],
      { sqrtPriceX96: BigNumber; tick: number }
    >;

    VAMMInitialization(
      sqrtPriceX96?: null,
      tick?: null
    ): TypedEventFilter<
      [BigNumber, number],
      { sqrtPriceX96: BigNumber; tick: number }
    >;

    "VAMMPriceChange(int24)"(
      tick?: null
    ): TypedEventFilter<[number], { tick: number }>;

    VAMMPriceChange(tick?: null): TypedEventFilter<[number], { tick: number }>;
  };

  estimateGas: {
    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    computeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    feeGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    feeWad(overrides?: CallOverrides): Promise<BigNumber>;

    fixedTokenGrowthGlobalX128(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      __marginEngine: string,
      __tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeVAMM(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAlpha(overrides?: CallOverrides): Promise<BigNumber>;

    liquidity(overrides?: CallOverrides): Promise<BigNumber>;

    marginEngine(overrides?: CallOverrides): Promise<BigNumber>;

    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFees(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFee(
      newFeeWad: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeProtocol(
      feeProtocol: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIsAlpha(
      __isAlpha: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<BigNumber>;

    ticks(tick: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateProtocolFees(
      protocolFeesCollected: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vammVars(overrides?: CallOverrides): Promise<BigNumber>;

    variableTokenGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    computeGrowthInside(
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    feeWad(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fixedTokenGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      __marginEngine: string,
      __tickSpacing: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeVAMM(
      sqrtPriceX96: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAlpha(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marginEngine(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxLiquidityPerTick(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      recipient: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFee(
      newFeeWad: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeProtocol(
      feeProtocol: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIsAlpha(
      __isAlpha: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      params: {
        recipient: string;
        amountSpecified: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tickBitmap(
      wordPosition: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tickSpacing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ticks(
      tick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateProtocolFees(
      protocolFeesCollected: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vammVars(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    variableTokenGrowthGlobalX128(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
