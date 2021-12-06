import '../styles/globals.scss';
import { Config, DAppProvider } from '@usedapp/core';
import type { AppProps } from 'next/app';
import React from 'react';

const config: Config = {
  supportedChains: [Number(process.env.NEXT_PUBLIC_CHAIN_ID || '4')],
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
};

export default MyApp;
