// pages/_app.js
import { useMemo } from 'react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // You can add more wallets here if needed.
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  // Set up the network to devnet. Change to 'mainnet-beta' for production.
  const network = clusterApiUrl('devnet');

  return (
    // Use the ConnectionProvider to provide a connection to the Solana network.
    <ConnectionProvider endpoint={network}>
      {/* Use the WalletProvider to provide the wallets you want to use. */}
      <WalletProvider wallets={wallets} autoConnect>
        {/* The WalletModalProvider allows users to select a wallet. */}
        <WalletModalProvider>
          {/* Here you would put any context providers or layout components that should wrap your entire app. */}
          <Component {...pageProps} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
