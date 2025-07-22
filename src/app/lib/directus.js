// src/lib/directus.js
export async function fetchHeaderMenu() {
  const url = process.env.NEXT_PUBLIC_DIRECTUS_URL + '/items/menu?deep[menu_items]=submenu';
  console.log('Fetching-from-front:' , url);
  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch menu: ' + res.status + ' ' + res.statusText);
  }
  const json = await res.json();
  return json && json.data && json.data[0];
}
