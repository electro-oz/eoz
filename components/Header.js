// components/Header.js
import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ padding: '1rem', background: '#222', position: 'sticky', top: 0, zIndex: 10 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ color: '#0cf' }}>EOz</h1>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          {['Smart Switches','Smart Curtain Drivers','Smart Sensors','Smart Lights'].map(item => (
            <a key={item} href="#" style={{ color: '#fff' }}>{item}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input type="search" placeholder="Search products…" style={{ padding:'0.5rem', borderRadius:4, border:'1px solid #444', background:'#333', color:'#fff' }}/>
+          <Link href="/login">
+            <a style={{ color: '#0cf' }}>Login</a>
+          </Link>
+          <Link href="/register">
+            <a style={{ color: '#0cf' }}>Register</a>
+          </Link>
        </div>
      </div>
    </header>
  );
}
