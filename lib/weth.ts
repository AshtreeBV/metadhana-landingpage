import { getPresaleInstance, getWETHInstance } from '../contracts';
import { BigNumber } from '@ethersproject/bignumber';
import { JsonRpcSigner } from '@ethersproject/providers';
import { wait } from './utils';

export async function getWETHBalance(account: string): Promise<BigNumber> {
  const weth = getWETHInstance();
  try {
    const balance = await weth.balanceOf(account);
    return balance;
  } catch (err) {
    throw err;
  }
}

export async function getWETHPresaleAllowance(
  account: string
): Promise<BigNumber> {
  const weth = getWETHInstance();
  const presale = getPresaleInstance();
  try {
    const allowance = await weth.allowance(account, presale.address);
    return allowance;
  } catch (err) {
    throw err;
  }
}

export async function approveWETH(
  signer: JsonRpcSigner,
  amount: BigNumber
): Promise<string> {
  const weth = getWETHInstance(signer);
  const presale = getPresaleInstance();

  try {
    const tx = await weth.approve(presale.address, amount, {
      gasLimit: 80_000,
    });
    const { transactionHash } = await tx.wait();
    await wait(1000);
    return transactionHash;
  } catch (err) {
    throw err;
  }
}
