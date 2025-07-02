import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

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
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/"><a className={styles.logo}>EOz</a></Link>
        <nav className={styles.nav}>
          <Link href="/smart-switches"><a>Smart Switches</a></Link>
          <Link href="/curtain-drivers"><a>Curtain Drivers</a></Link>
          <Link href="/sensors"><a>Sensors</a></Link>
          <Link href="/lights"><a>Lights</a></Link>
          <Link href="/matter-products"><a>Matter</a></Link>
        </nav>
        <div className={styles.actions}>
          <button onClick={toggle} className={styles.themeToggle}>
            {dark ? '🌞' : '🌙'}
          </button>
          <Link href="/login"><a className={styles.login}>Login</a></Link>
        </div>
      </div>
    </header>
);
}
