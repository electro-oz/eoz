import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h1>Elevate Your Home with Smart Automation</h1>
        <p>
          Discover the latest in smart switches, sensors, and lighting solutions
          designed to make your life easier.
        </p>
        <Link href="/shop">
          <a className={styles.ctaButton}>Shop Now</a>
        </Link>
      </div>
    </section>
  );
}
