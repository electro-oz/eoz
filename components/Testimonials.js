export default function Testimonials() {
  const reviews = [
    { text:'Fantastic service and product!', author:'Sarah M., Sydney, NSW' },
    { text:'Easy setup, works perfectly.', author:'David L., Melbourne, VIC' },
    { text:'Great customer support.', author:'Priya K., Brisbane, QLD' },
  ];
  return (
    <section style={{ padding:'2rem 1rem', background:'#111' }}>
      {reviews.map(r => (
        <blockquote key={r.author} style={{ background:'#222', padding:'1rem', borderRadius:6, color:'#fff', marginBottom:'1rem' }}>
          <p>“{r.text}”</p>
          <footer style={{ fontSize:'.9rem', opacity:.8 }}>{r.author}</footer>
        </blockquote>
      ))}
    </section>
  );
}
