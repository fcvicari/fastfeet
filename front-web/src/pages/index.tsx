import React from 'react';
import Head from 'next/head';

import FastFeetLogo from '../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>FastFeed</title>
      </Head>

      <main>
        <FastFeetLogo />
        <h1>Welcome to FastFeed</h1>
      </main>
    </div>
  );
};

export default Home;
