import styles from '../styles/HeroCarousel.module.css';
import { useState, useEffect } from 'react';

const slides = [
  { title: 'Shop Popular Products', cta: '/shop/popular' },
  { title: 'Check New Arrivals', cta: '/shop/new' },
  { title: 'Discover Best Sellers', cta: '/shop/bestsellers' },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  const slide = slides[index];
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h2>{slide.title}</h2>
        <a href={slide.cta} className={styles.button}>Explore</a>
      </div>
    </section>
  );
}
