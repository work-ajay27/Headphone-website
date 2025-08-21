// Fetch products from backend (Spring Boot) which proxies Flipkart API
// Fallback: caller may use local catalog if this request fails

export async function fetchProducts(type) {
  const params = new URLSearchParams();
  if (type && type !== 'all') params.set('type', String(type));
  const response = await fetch(`/api/flipkart/products?${params.toString()}`, {
    headers: { 'Accept': 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Failed to load products');
  }
  const data = await response.json();
  // Normalize to expected shape
  return (Array.isArray(data) ? data : []).map((p) => ({
    id: p.id ?? p.productId ?? String(Math.random()).slice(2),
    name: p.name ?? p.title ?? 'Product',
    price: p.price ?? p.offerPrice ?? p.mrp ?? 0,
    image: p.image ?? p.imageUrl ?? p.thumbnail,
    type: (p.type || p.category || 'all').toLowerCase(),
  }));
}



