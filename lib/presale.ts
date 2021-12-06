import { getPresaleInstance } from '../contracts';
import { JsonRpcSigner } from '@ethersproject/providers';
import { wait } from './utils';

export async function buyNFT(
  signer: JsonRpcSigner,
  amount: number,
  sig: string
): Promise<string> {
  const presale = getPresaleInstance(signer);

  if (sig === '') {
    sig =
      '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
  }

  try {
    const tx = await presale.buyNFT(amount, sig, {
      gasLimit: 150_000 * amount + 120_000,
    });
    const { transactionHash } = await tx.wait();
    await wait(1000);
    return transactionHash;
  } catch (err) {
    throw err;
  }
}
