export default function Footer() {
  return (
    <footer style={{ padding:'2rem 1rem', background:'#222', color:'#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', flexWrap:'wrap', gap:'2rem' }}>
        <div>
          <h4>Company</h4>
          {['About Us','Contact Us','Shipping & Returns','Privacy Policy','Terms of Service','Register as Electrician'].map(link => (
            <div key={link}><a href="#" style={{ color:'#0cf' }}>{link}</a></div>
          ))}
        </div>
        <div>
          <h4>Connect</h4>
          <div>
            <input type="email" placeholder="Email address" style={{ padding:'.5rem', borderRadius:4, border:'1px solid #444', marginRight:'0.5rem' }}/>
            <button style={{ padding:'.5rem 1rem', background:'#0cf', color:'#000', border:'none', borderRadius:4 }}>Subscribe</button>
          </div>
        </div>
        <div>
          <h4>Follow Us</h4>
          {['Instagram','Facebook','YouTube'].map(s => (
            <a key={s} href="#" style={{ marginRight:'1rem', color:'#0cf' }}>{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
