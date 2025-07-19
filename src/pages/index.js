import Head from 'next/head'
import { siteBrand } from '../config/site-config'

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteBrand.name} - {siteBrand.tagline}</title>
        <meta name="description" content="Your Smart Home Solution, powered by EOZ. Secure, smart, and seamless home automation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header style={{
        background: 'var(--color-background)',
        color: 'var(--color-dark)',
        display: 'flex',
        alignItems: 'center',
        padding: '1rem 2rem',
        borderBottom: `2px solid var(--color-primary)`
      }}>
        <img src={siteBrand.logoLight} alt="EOZ Logo" height={64} style={{ marginRight: 24 }} />
        <div>
          <h1 style={{ margin: 0 }}>{siteBrand.name}</h1>
          <p style={{ margin: 0 }}>{siteBrand.tagline}</p>
        </div>
      </header>
      <main style={{ padding: '3rem 2rem' }}>
        <h2>Welcome to EOZ Smart Home Solutions</h2>
        <p>The best IoT and automation products, curated for you.</p>
        {/* Add featured products and more sections here */}
      </main>
    </>
  )
}
