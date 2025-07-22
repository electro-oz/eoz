export async function fetchHeaderMenu() {
  const url = process.env.NEXT_PUBLIC_DIRECTUS_URL + '/items/menu?deep[menu_items]=submenu';
  console.log('✅ [fetchHeaderMenu] Using URL:', url); // this is key for debugging

  try {
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch menu: ' + res.status + ' ' + res.statusText);
    }

    const json = await res.json();
    return json?.data?.[0];
  } catch (err) {
    console.error('❌ [fetchHeaderMenu] Load failed:', err.message);
    throw new Error('Load failed');
  }
}
