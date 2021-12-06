interface IGetEligibility {
  whitelisted: boolean;
  signature: string;
  purchasedAmount: number;
}

export async function getEligibility(
  round: number,
  account: string
): Promise<IGetEligibility> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;
    const res = await fetch(
      apiUrl + '/userInfo?round=' + round + '&userAddr=' + account,
      {
        mode: 'cors', // no-cors, *cors, same-origin
      }
    );
    const data = (await res.json()) as IGetEligibility;
    return data;
  } catch (err) {
    throw err;
  }
}

export interface IGetPresaleInfo {
  round: number;
  isOpen: boolean;
  openingTime: number;
  closingTime: number;
  isPublicSale: boolean;
  price: number;
  cap: number;
  sold: number;
  total_minted: number;
  supply: number;
}

export async function getPresaleInfo(): Promise<IGetPresaleInfo> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;
    const res = await fetch(apiUrl + '/presale', {
      mode: 'cors', // no-cors, *cors, same-origin
    });
    const data = (await res.json()) as IGetPresaleInfo;
    return data;
  } catch (err) {
    throw err;
  }
}

interface IGetPendingDNA {
  tokenIds: number[];
  dnas: string[];
  signature: string;
}

export async function getPendingDNA(
  account: string,
  repeat = false
): Promise<IGetPendingDNA | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;
    let fullfilled = !repeat;
    do {
      const res = await fetch(apiUrl + '/dna?userAddr=' + account, {
        mode: 'cors', // no-cors, *cors, same-origin
      });
      if (res.status === 200) {
        const data = (await res.json()) as IGetPendingDNA;
        return data;
      }
    } while (!fullfilled);
    return null;
  } catch (err) {
    throw err;
  }
}

export async function trackReferral(
  referralId: string,
  account: string
): Promise<void> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        referrer: referralId,
        recipient: account,
      }),
    };
    await fetch(apiUrl + '/referral', options);
  } catch (err) {
    throw err;
  }
}
