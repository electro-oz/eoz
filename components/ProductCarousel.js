export default function ProductCarousel() {
  const items = [
    { name:'Zemsmart Wall Light Switch', price:'$21.69'},
    { name:'Zemsmart WiFi Curtain Motor', price:'$56.99'},
    { name:'Zemsmart Motion Sensor', price:'$39.39'},
    { name:'Zemsmart LED Smart Bulb', price:'$13.99'},
  ];
  return (
    <section style={{ padding:'2rem 1rem', overflowX:'auto', display:'flex', gap:'1rem' }}>
      {items.map(i => (
        <div key={i.name} style={{ minWidth:200, background:'#222', padding:'1rem', borderRadius:6, color:'#fff' }}>
          <div style={{ height:120, background:'#333', marginBottom:'1rem' }} />
          <h3 style={{ margin:'0 0 .5rem' }}>{i.name}</h3>
          <p style={{ margin:'0 0 1rem' }}>{i.price}</p>
          <a href="#" style={{ display:'inline-block', padding:'0.5rem 1rem', background:'#0cf', color:'#000', borderRadius:4, textDecoration:'none' }}>View Product</a>
        </div>
      ))}
    </section>
  );
}
