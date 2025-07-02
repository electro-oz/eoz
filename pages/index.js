import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>EOz - JS Starter</title>
      </Head>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>EOz - JS Starter</h1>
        <p>This is a minimal JS-based Next.js setup.</p>
      </main>
    </>
  );
}