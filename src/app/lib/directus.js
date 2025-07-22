// src/lib/directus.js
export async function fetchHeaderMenu() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_DIRECTUS_URL +
      '/items/menu?deep[menu_items]=submenu',
    { cache: 'no-store' }
  );

  if (!res.ok) throw new Error('Failed to fetch menu');

  const json = await res.json();
  return json && json.data && json.data[0]; // Get the first menu entry
}
