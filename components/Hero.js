import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>Elevate Your Home with Smart Automation</h1>
        <p className={styles.subtitle}>
          Discover smart switches, sensors, and lighting solutions designed to make your life easier.
        </p>
        <a href="/shop" className={styles.ctaButton}>Shop Now</a>
      </div>
    </section>
  );
}
