import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/about"><a>About Us</a></Link>
          <Link href="/contact"><a>Contact Us</a></Link>
          <Link href="/shipping"><a>Shipping & Returns</a></Link>
          <Link href="/privacy"><a>Privacy Policy</a></Link>
          <Link href="/terms"><a>Terms of Service</a></Link>
        </div>
        <div className={styles.newsletter}>
          <p>Subscribe to our newsletter</p>
          <input type="email" placeholder="Your email" className={styles.input} />
          <button className={styles.subscribe}>Subscribe</button>
        </div>
      </div>
    </footer>
);
}
