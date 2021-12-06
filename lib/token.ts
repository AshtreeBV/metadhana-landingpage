import { getTokenInstance } from '../contracts';
import { JsonRpcSigner } from '@ethersproject/providers';
import { wait } from './utils';

export async function registerPendingDNA(
  signer: JsonRpcSigner,
  tokenIds: number[],
  dnas: string[],
  sig: string
): Promise<string> {
  const token = getTokenInstance(signer);

  try {
    const tx = await token.registerDna(tokenIds, dnas, sig, {
      gasLimit: 100_000 * tokenIds.length + 100_000,
    });
    const { transactionHash } = await tx.wait();
    await wait(1000);
    return transactionHash;
  } catch (err) {
    throw err;
  }
}
