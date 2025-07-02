'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md">
      <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">EOz</Link>
      <nav className="space-x-4 hidden md:flex">
        <Link href="#" className="text-gray-700 dark:text-gray-200">Smart Switches</Link>
        <Link href="#" className="text-gray-700 dark:text-gray-200">Curtain Drivers</Link>
        <Link href="#" className="text-gray-700 dark:text-gray-200">Sensors</Link>
      </nav>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-200">
          {darkMode ? '☀️' : '🌙'}
        </button>
        <Link href="/login" className="text-gray-700 dark:text-gray-200">Login</Link>
      </div>
    </header>
  );
}
