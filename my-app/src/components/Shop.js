import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { products as catalog } from '../data/products';
import { fetchProducts } from '../services/products';

const filterOptions = [
  { key: 'all', label: 'All' },
  { key: 'wireless', label: 'Wireless' },
  { key: 'wired', label: 'Wired' },
  { key: 'earbuds', label: 'Earbuds' },
  { key: 'gaming', label: 'Gaming' },
  { key: 'anc', label: 'ANC' },
  { key: 'sports', label: 'Sports' },
];

const sortOptions = [
  { key: 'default', label: 'Default' },
  { key: 'price-low', label: 'Price: Low to High' },
  { key: 'price-high', label: 'Price: High to Low' },
  { key: 'name', label: 'Name: A to Z' },
];

function Shop() {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = (searchParams.get('type') || 'all').toLowerCase();
  const sort = searchParams.get('sort') || 'default';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  const [remoteProducts, setRemoteProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [urlSearchParam] = useState(() => searchParams.get('search') || '');

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError('');
    fetchProducts(type)
      .then((items) => {
        if (mounted) setRemoteProducts(items);
      })
      .catch(() => {
        if (mounted) setRemoteProducts([]);
      })
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, [type]);

  // Get search term from URL parameter
  const searchTerm = urlSearchParam;

  const products = useMemo(() => {
    const local = type === 'all' ? catalog : catalog.filter((p) => p.type.toLowerCase() === type);
    // Prefer remote if available, else local fallback
    let filteredProducts = remoteProducts.length ? remoteProducts : local;

    // Apply search filter
    if (searchTerm.trim()) {
      const searchQuery = searchTerm.toLowerCase().trim();
      
      filteredProducts = filteredProducts.filter(product => {
        const productName = product.name.toLowerCase();
        const productType = product.type.toLowerCase();
        
        // Search in name and type
        const matchesName = productName.includes(searchQuery);
        const matchesType = productType.includes(searchQuery);
        
        return matchesName || matchesType;
      });
    }

    // Apply price range filter
    if (minPrice || maxPrice) {
      filteredProducts = filteredProducts.filter(product => {
        const price = parseInt(String(product.price).replace(/[^\d]/g, ''), 10);
        const min = minPrice ? parseInt(minPrice, 10) : 0;
        const max = maxPrice ? parseInt(maxPrice, 10) : Infinity;
        return price >= min && price <= max;
      });
    }

    // Apply sorting
    filteredProducts.sort((a, b) => {
      const priceA = parseInt(String(a.price).replace(/[^\d]/g, ''), 10);
      const priceB = parseInt(String(b.price).replace(/[^\d]/g, ''), 10);
      
      switch (sort) {
        case 'price-low':
          return priceA - priceB;
        case 'price-high':
          return priceB - priceA;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
    
    return filteredProducts;
  }, [type, remoteProducts, searchTerm, minPrice, maxPrice, sort]);



  const handleFilterChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Shop {type !== 'all' ? `- ${type.charAt(0).toUpperCase() + type.slice(1)}` : ''}</h1>
          <Link to="/" className="text-sm text-red-600 hover:text-red-700">Home</Link>
        </div>



        {/* Filters */}
        <div className="mb-6 space-y-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((f) => {
              const isActive = f.key === type;
              return (
                <button
                  key={f.key}
                  onClick={() => handleFilterChange('type', f.key === 'all' ? '' : f.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'bg-red-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Advanced Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Sort */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">Sort by:</label>
              <select
                value={sort}
                onChange={(e) => handleFilterChange('sort', e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.key} value={option.key}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-gray-700">Price:</label>
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Clear Filters */}
            {(searchTerm || minPrice || maxPrice || sort !== 'default') && (
              <button
                onClick={() => {
                  setSearchParams({});
                }}
                className="text-sm text-red-600 hover:text-red-700 underline"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-gray-600">
          {products.length} product{products.length !== 1 ? 's' : ''} found
        </div>

        {loading ? (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-600">Loading products…</div>
        ) : products.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-600">
            {searchTerm ? (
              <div>
                <p className="text-lg font-medium text-gray-900 mb-2">No products found for "{searchTerm}"</p>
                <p className="text-gray-600 mb-4">Try adjusting your filters or browse all products.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-red-600 hover:text-red-700 underline"
                >
                  Clear filters
                </button>
              </div>
            ) : minPrice || maxPrice ? (
              'No products match your filters.'
            ) : (
              'No products found.'
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-contain bg-gray-100" />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full capitalize">{product.type}</span>
                  </div>
                  <button
                    onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                    className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-red-50 transition-colors duration-200"
                  >
                    <svg className={`w-4 h-4 ${isInWishlist(product.id) ? 'text-red-600 fill-current' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <Link to={`/product/${product.id}`} className="block">
                    <h3 className="font-semibold text-gray-900 mb-2 hover:text-red-600 transition-colors duration-200">{product.name}</h3>
                  </Link>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-red-600">{product.price}</span>
                    <button onClick={() => addToCart(product)} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;


