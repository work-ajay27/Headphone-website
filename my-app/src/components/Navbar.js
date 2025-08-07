import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../resources/Logo.png';
import cartIcon from '../resources/cart.png';
import userIcon from '../resources/user.png';
import wishlistIcon from '../resources/online-shopping.png';

function Navbar() {
    const navigate = useNavigate();
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartCount = 2; // Example cart count

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

                    {/* Right side icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Search */}
                        <Link
                            to="/cart"
                            className="p-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-full transition-all duration-200"
                        >
                            <img src={wishlistIcon} alt="Search" className="h-6 w-6" />
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
                            to="/search"
                            className="p-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-full transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <img src={wishlistIcon} alt="Search" className="h-6 w-6" />
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