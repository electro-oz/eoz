'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="w-full p-4 border-b flex justify-between items-center bg-white dark:bg-zinc-900">
      <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-300">EOz</Link>
      <nav className="flex gap-4 items-center">
        <Link href="/login" className="hover:underline text-zinc-800 dark:text-zinc-200">Login</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
