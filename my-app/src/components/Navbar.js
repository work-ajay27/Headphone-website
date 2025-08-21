import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../resources/Logo.png';
import cartIcon from '../resources/cart.png';
import userIcon from '../resources/user.png';
import wishlistIcon from '../resources/online-shopping.png';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useUser } from '../contexts/UserContext';
import { products as catalog } from '../data/products';

function Navbar() {
    const navigate = useNavigate();
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(false);
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();
    const { user, isAuthenticated, logout } = useUser();

    // Search functionality
    const getSearchResults = () => {
        if (!searchTerm.trim()) return [];
        
        const searchQuery = searchTerm.toLowerCase().trim();
        return catalog.filter(product => {
            const productName = product.name.toLowerCase();
            const productType = product.type.toLowerCase();
            
            return productName.includes(searchQuery) || productType.includes(searchQuery);
        });
    };

    return (
        <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Logo" className="h-8 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                to="/"
                                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                to="/shop"
                                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Shop
                            </Link>
                            <Link
                                to="/categories"
                                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Categories
                            </Link>
                            <Link
                                to="/deals"
                                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Deals
                            </Link>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setShowSearchResults(e.target.value.length > 0);
                                }}
                                onFocus={() => setShowSearchResults(searchTerm.length > 0)}
                                onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                                className="w-full px-4 py-2 pl-10 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            {searchTerm && (
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setShowSearchResults(false);
                                    }}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    <svg className="h-4 w-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>

                        {/* Search Results Dropdown */}
                        {showSearchResults && (
                            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                                {getSearchResults().length > 0 ? (
                                    <div>
                                        {getSearchResults().slice(0, 5).map((product) => (
                                            <div
                                                key={product.id}
                                                onClick={() => {
                                                    navigate(`/product/${product.id}`);
                                                    setSearchTerm('');
                                                    setShowSearchResults(false);
                                                }}
                                                className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                                            >
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-12 h-12 object-cover rounded mr-3"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                                                    <p className="text-sm text-red-600 font-medium">{product.price}</p>
                                                </div>
                                                <span className="text-xs text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">{product.type}</span>
                                            </div>
                                        ))}
                                        {getSearchResults().length > 5 && (
                                            <div className="p-3 text-center border-t border-gray-100">
                                                <button
                                                    onClick={() => {
                                                        navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
                                                        setSearchTerm('');
                                                        setShowSearchResults(false);
                                                    }}
                                                    className="text-sm text-red-600 hover:text-red-700 font-medium"
                                                >
                                                    View all {getSearchResults().length} results
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="p-4 text-center text-gray-500">
                                        <p>No products found for "{searchTerm}"</p>
                                        <button
                                            onClick={() => navigate('/shop')}
                                            className="text-sm text-red-600 hover:text-red-700 mt-2"
                                        >
                                            Browse all products
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Right side icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Wishlist */}
                        <Link
                            to="/wishlist"
                            className="relative p-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-full transition-all duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="h-6 w-6"
                                strokeWidth="1.8"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {wishlistCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="relative p-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-full transition-all duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="h-6 w-6"
                                strokeWidth="1.8"
                            >
                                <path d="M3 3h2l.4 2M7 13h10l3-8H6.4" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="9" cy="19" r="1.5" />
                                <circle cx="17" cy="19" r="1.5" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                                    {cartCount}
                                </span>
                            )}
                        </Link>



                        {/* User dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowUserDropdown(!showUserDropdown)}
                                className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-full transition-all duration-200"
                            >
                                <img src={userIcon} alt="User" className="h-6 w-6" />
                            </button>

                            {showUserDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                                    {isAuthenticated ? (
                                        <>
                                            <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
                                                Welcome, {user?.name || 'User'}
                                            </div>
                                            <button
                                                onClick={() => {
                                                    navigate('/profile');
                                                    setShowUserDropdown(false);
                                                }}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                My Profile
                                            </button>
                                            <button
                                                onClick={() => {
                                                    navigate('/wishlist');
                                                    setShowUserDropdown(false);
                                                }}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                Wishlist
                                            </button>
                                            <button
                                                onClick={() => {
                                                    logout();
                                                    setShowUserDropdown(false);
                                                    navigate('/');
                                                }}
                                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => {
                                                    navigate('/login');
                                                    setShowUserDropdown(false);
                                                }}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                Login
                                            </button>
                                            <button
                                                onClick={() => {
                                                    navigate('/signup');
                                                    setShowUserDropdown(false);
                                                }}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                            >
                                                Sign Up
                                            </button>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
                        >
                            <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
                {/* Mobile Search Bar */}
                <div className="px-4 py-3 border-b border-gray-200">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setShowSearchResults(e.target.value.length > 0);
                            }}
                            className="w-full px-4 py-2 pl-10 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        {searchTerm && (
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setShowSearchResults(false);
                                }}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                <svg className="h-4 w-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Mobile Search Results */}
                    {showSearchResults && searchTerm && (
                        <div className="mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                            {getSearchResults().length > 0 ? (
                                <div>
                                    {getSearchResults().slice(0, 3).map((product) => (
                                        <div
                                            key={product.id}
                                            onClick={() => {
                                                navigate(`/product/${product.id}`);
                                                setSearchTerm('');
                                                setShowSearchResults(false);
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-10 h-10 object-cover rounded mr-3"
                                            />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                                                <p className="text-xs text-red-600 font-medium">{product.price}</p>
                                            </div>
                                            <span className="text-xs text-gray-500 capitalize bg-gray-100 px-1 py-0.5 rounded">{product.type}</span>
                                        </div>
                                    ))}
                                    {getSearchResults().length > 3 && (
                                        <div className="p-2 text-center border-t border-gray-100">
                                            <button
                                                onClick={() => {
                                                    navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
                                                    setSearchTerm('');
                                                    setShowSearchResults(false);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                className="text-xs text-red-600 hover:text-red-700 font-medium"
                                            >
                                                View all {getSearchResults().length} results
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="p-3 text-center text-gray-500">
                                    <p className="text-sm">No products found</p>
                                    <button
                                        onClick={() => {
                                            navigate('/shop');
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-xs text-red-600 hover:text-red-700 mt-1"
                                    >
                                        Browse all products
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        to="/"
                        className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/shop"
                        className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Shop
                    </Link>
                    <Link
                        to="/categories"
                        className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Categories
                    </Link>
                    <Link
                        to="/deals"
                        className="text-gray-700 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Deals
                    </Link>
                </div>

                {/* Mobile icons */}
                <div className="px-4 py-3 border-t border-gray-200">
                    <div className="flex items-center justify-around">
                        <Link
                            to="/wishlist"
                            className="relative p-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-full transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="h-6 w-6"
                                strokeWidth="1.8"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            {wishlistCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        <Link
                            to="/cart"
                            className="relative p-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-full transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <img src={cartIcon} alt="Cart" className="h-6 w-6" />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <button
                            onClick={() => {
                                setShowUserDropdown(!showUserDropdown);
                                setIsMobileMenuOpen(false);
                            }}
                            className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-full transition-all duration-200"
                        >
                            <img src={userIcon} alt="User" className="h-6 w-6" />
                        </button>
                    </div>

                    {showUserDropdown && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                            <button
                                onClick={() => {
                                    navigate('/login');
                                    setShowUserDropdown(false);
                                }}
                                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => {
                                    navigate('/signup');
                                    setShowUserDropdown(false);
                                }}
                                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                                Sign Up
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;