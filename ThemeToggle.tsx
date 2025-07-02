'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const hour = new Date().getHours();
    const preferred = (hour >= 19 || hour < 6) ? 'dark' : 'light';
    setTheme(preferred);
    document.documentElement.classList.toggle('dark', preferred === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button onClick={toggleTheme} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-sm">
      {theme === 'light' ? '🌞 Light' : '🌜 Dark'}
    </button>
  );
}
