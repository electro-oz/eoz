// src/components/Header.js
'use client';

import { useEffect, useState } from 'react';
import { fetchHeaderMenu } from '../lib/directus';

export default function Header() {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchHeaderMenu().then(setMenu).catch(console.error);
  }, []);

  if (!menu) return null;

  return (
    <header className="site-header">
      <nav>
        <ul className="menu">
          {menu.menu_items.map((item, i) => (
            <li key={i}>
              <a href={item.url}>{item.label}</a>
              {item.submenu && item.submenu.length > 0 && (
                <ul>
                  {item.submenu.map((sub, j) => (
                    <li key={j}>
                      <a href={sub.url}>{sub.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
