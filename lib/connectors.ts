import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const POLLING_INTERVAL = 12000;
const chainId = Number(process.env.NEXT_PUBLIC_CHAIN_ID || '4');
export const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: process.env.NEXT_PUBLIC_RPC_URL || '' },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});
