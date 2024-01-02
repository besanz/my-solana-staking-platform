// components/layout.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Layout = ({ children, title = 'Solana Staking Platform' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Stake your SOL tokens with ease." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <nav className="nav">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          {/* Add additional navigation links as needed */}
        </nav>
        <WalletMultiButton />
      </header>≥
      <main className="main">{children}</main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Solana Staking Platform</p>
      </footer>
    </>
  );
};

export default Layout;
