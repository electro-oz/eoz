import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import AnnouncementBanner from './AnnouncementBanner';

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggle = () => {
    const newDark = !dark;
    setDark(newDark);
    if (newDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return (
    <>
      <AnnouncementBanner />
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/"><a className={styles.logo}>
            <Image src="/logo-light.png" alt="EOz" width={120} height={40}/>
          </a></Link>
          <nav className={styles.nav}>
            <div className={styles.dropdown}>
              <button>Products</button>
              <div className={styles.dropdownMenu}>
                <Link href="/smart-lights"><a>Smart Lights</a></Link>
                <Link href="/smart-switches"><a>Smart Switches</a></Link>
                <Link href="/sensors"><a>Smart Sensors</a></Link>
                <Link href="/matter-products"><a>Matter Devices</a></Link>
                <Link href="/curtain-drivers"><a>Smart Curtain Drivers</a></Link>
                <Link href="/other-products"><a>Other Smart Products</a></Link>
              </div>
            </div>
            <div className={styles.dropdown}>
              <button>Service</button>
              <div className={styles.dropdownMenu}>
                <Link href="/help"><a>Need Help?</a></Link>
                <Link href="/electrician"><a>Need Electrician?</a></Link>
                <Link href="/request-service"><a>Request a Service</a></Link>
              </div>
            </div>
            <Link href="/about"><a>About Us</a></Link>
          </nav>
          <div className={styles.actions}>
            <button onClick={toggle} className={styles.themeToggle}>
              {dark ? '🌞' : '🌙'}
            </button>
            <Link href="/login">
              <a className={styles.auth}>
                <span role="img" aria-label="login">🔑</span> Login
              </a>
            </Link>
            <Link href="/register">
              <a className={styles.auth}>
                <span role="img" aria-label="register">📝</span> Register
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
