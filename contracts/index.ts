import { JsonRpcSigner } from '@ethersproject/providers';
import { ethers } from 'ethers';
import {
  Felisians__factory,
  Presale__factory,
  IWETH__factory,
} from './abis/types';

export const getTokenInstance = (signer?: JsonRpcSigner) => {
  const rpcURL = process.env.NEXT_PUBLIC_RPC_URL || '';
  const tokenAddr = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDR || '';
  const provider = new ethers.providers.JsonRpcProvider(rpcURL);
  const token = Felisians__factory.connect(tokenAddr, signer || provider);
  return token;
};

export const getPresaleInstance = (signer?: JsonRpcSigner) => {
  const rpcURL = process.env.NEXT_PUBLIC_RPC_URL || '';
  const presaleAddr = process.env.NEXT_PUBLIC_PRESALE_CONTRACT_ADDR || '';
  const provider = new ethers.providers.JsonRpcProvider(rpcURL);
  const presale = Presale__factory.connect(presaleAddr, signer || provider);
  return presale;
};

export const getWETHInstance = (signer?: JsonRpcSigner) => {
  const rpcURL = process.env.NEXT_PUBLIC_RPC_URL || '';
  const wethAddr = process.env.NEXT_PUBLIC_WETH_CONTRACT_ADDR || '';
  const provider = new ethers.providers.JsonRpcProvider(rpcURL);
  const token = IWETH__factory.connect(wethAddr, signer || provider);
  return token;
};
