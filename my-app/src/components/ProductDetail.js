import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { products as catalog } from '../data/products';

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find product in catalog
    const foundProduct = catalog.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // If not found, redirect to shop
      navigate('/shop');
    }
    setLoading(false);
  }, [productId, navigate]);

  const handleAddToCart = () => {
    if (product) {
      // Add multiple quantities
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  const isInCart = product && cartItems.some(item => item.id === product.id);
  const cartItem = product ? cartItems.find(item => item.id === product.id) : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  // Mock specifications for demonstration
  const specifications = {
    'Connectivity': product.type === 'wireless' ? 'Bluetooth 5.0' : '3.5mm Jack',
    'Battery Life': product.type === 'wireless' ? 'Up to 20 hours' : 'N/A',
    'Driver Size': '10mm Dynamic',
    'Frequency Response': '20Hz - 20kHz',
    'Impedance': '32Ω',
    'Sensitivity': '100dB',
    'Weight': '15g',
    'Warranty': '1 Year'
  };

  // Mock related products
  const relatedProducts = catalog
    .filter(p => p.type === product.type && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-red-600">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-red-600">Shop</Link></li>
            <li>/</li>
            <li><Link to={`/shop?type=${product.type}`} className="hover:text-red-600 capitalize">{product.type}</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain bg-white rounded-lg shadow-md"
              />
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedImage(0)}
                className={`w-20 h-20 rounded-lg border-2 overflow-hidden ${
                  selectedImage === 0 ? 'border-red-600' : 'border-gray-300'
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </button>
              {/* Additional image placeholders */}
              {[1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg border-2 overflow-hidden bg-gray-200 flex items-center justify-center ${
                    selectedImage === index ? 'border-red-600' : 'border-gray-300'
                  }`}
                >
                  <span className="text-gray-500 text-xs">Image {index + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full capitalize mb-2">
                {product.type}
              </span>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-red-600">{product.price}</span>
                <span className="text-sm text-gray-500 line-through">₹{parseInt(product.price.replace(/[^\d]/g, '')) + 500}</span>
                <span className="text-sm text-green-600 font-medium">Save ₹500</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Quantity:</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex space-x-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  Add to Cart - {product.price}
                </button>
                <button
                  onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition-colors duration-200 ${
                    isInWishlist(product.id) 
                      ? 'border-red-600 bg-red-50 text-red-600' 
                      : 'border-gray-300 hover:border-red-600 hover:bg-red-50'
                  }`}
                >
                  <svg className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              {isInCart && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-green-800 text-sm">
                    ✓ Added to cart ({cartItem?.quantity} item{cartItem?.quantity > 1 ? 's' : ''})
                  </p>
                  <Link to="/cart" className="text-green-600 hover:text-green-700 text-sm underline">
                    View Cart
                  </Link>
                </div>
              )}

              <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200">
                Buy Now
              </button>
            </div>

            {/* Product Highlights */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  High-quality audio with premium drivers
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Comfortable fit for extended use
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {product.type === 'wireless' ? 'Wireless freedom with stable connection' : 'Reliable wired connection'}
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1-year warranty with excellent support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden">
                  <div className="relative">
                    <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-48 object-contain bg-gray-100" />
                    <div className="absolute top-2 left-2">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full capitalize">{relatedProduct.type}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-red-600">{relatedProduct.price}</span>
                      <Link
                        to={`/product/${relatedProduct.id}`}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
