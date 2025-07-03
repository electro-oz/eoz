export default function Filters() {
  const cats = [
    { name: 'Smart Switches', icon: '🔲' },
    { name: 'Smart Curtain Drivers', icon: '🚪' },
    { name: 'Smart Sensors', icon: '📡' },
    { name: 'Smart Lights', icon: '💡' },
  ];
  return (
    <section id="products" style={{ padding:'2rem 1rem', display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap' }}>
      {cats.map(c => (
        <a key={c.name} href="#" style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'1rem', background:'#222', borderRadius:6, color:'#fff', textDecoration:'none' }}>
          <span style={{ fontSize:'1.5rem' }}>{c.icon}</span>
          <span>{c.name}</span>
        </a>
      ))}
    </section>
  );
}
