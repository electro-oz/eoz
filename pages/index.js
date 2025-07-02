// pages/index.js
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Filters from '../components/Filters'

export default function Home() {
  return (
    <>
      <Head>
        <title>EOz – Your Smart Home Solution</title>
        <meta name="description" content="Elevate your home with smart automation" />
      </Head>

      {/* 1) Render your Header */}
      <Header />

      {/* 2) Render the Hero section */}
      <Hero />

      {/* Quick Filters goes here */}
      <Filters />

      {/* 3) Your existing main content */}
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to EOz</h1>
        <p>Your Smart Home Solution</p>
      </main>
    </>
  )
}
