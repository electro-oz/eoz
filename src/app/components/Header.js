// src/components/Header.js ... ... 
'use client';

import { useEffect, useState } from 'react';
import { fetchHeaderMenu } from '../lib/directus';

export default function Header() {
  const [menu, setMenu] = useState(null);

useEffect(() => {
  fetchHeaderMenu()
    .then(data => {
      console.log('Fetched menu data:', data);
      setMenu(data);
    })
    .catch(err => {
      console.error('Menu fetch failed:', err);
      setMenu({ error: err.message });
    });
}, []);




if (!menu) return <div>Loading menu...</div>;
if (menu.error) return <div>Error loading menu: {menu.error}</div>;
  if (!menu.menu_items || menu.menu_items.length === 0) return <div>No menu items found</div>; 
  if (!Array.isArray(menu.menu_items)) return <div>Invalid menu structure</div>;


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
