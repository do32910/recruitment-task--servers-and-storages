import React from 'react';
import Head from 'next/head';
import Servers from './servers';

const Home = () => (
  <>
    <Head>
      <title>UpCloud</title>
    </Head>
    <main>
      <Servers />
    </main>
  </>
);

export default Home;
