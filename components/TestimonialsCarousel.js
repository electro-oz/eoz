import styles from '../styles/TestimonialsCarousel.module.css';
import { useState, useEffect } from 'react';

const testimonials = [
  { name: 'Alice P.', location: 'Sydney, NSW', product: 'Smart Switch', quote: 'Absolutely love the convenience and savings!' },
  { name: 'Mark T.', location: 'Melbourne, VIC', product: 'Smart Light', quote: 'The quality is top-notch and easy to use.' },
  { name: 'Sarah L.', location: 'Brisbane, QLD', product: 'Smart Sensor', quote: 'Great product and amazing customer support.' },
  { name: 'John D.', location: 'Perth, WA', product: 'Curtain Driver', quote: 'Makes my life so much easier every day.' },
  { name: 'Emma R.', location: 'Adelaide, SA', product: 'Matter Device', quote: 'Reliable and versatile for all my smart home needs.' },
  // add more up to 10...
];

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[idx];
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.avatar}></div>
        <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
        <p className={styles.meta}>— {t.name}, {t.location} (Product: {t.product})</p>
      </div>
    </section>
  );
}
