import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      const isDark = saved === 'dark';
      setDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>EOz</a>
        </Link>
        <nav className={styles.nav}>
          <Link href="/smart-switches"><a>Smart Switches</a></Link>
          <Link href="/curtain-drivers"><a>Curtain Drivers</a></Link>
          <Link href="/sensors"><a>Sensors</a></Link>
          <Link href="/lights"><a>Lights</a></Link>
          <Link href="/matter-products"><a>Matter Products</a></Link>
        </nav>
        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.themeToggle}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <Link href="/login"><a className={styles.loginLink}>Login</a></Link>
        </div>
      </div>
    </header>
  );
}
