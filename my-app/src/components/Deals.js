import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { products } from '../data/products';

function Deals() {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    // Flash sale countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else {
                    return { hours: 0, minutes: 0, seconds: 0 };
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Banner auto-slide
    useEffect(() => {
        const bannerTimer = setInterval(() => {
            setCurrentBanner(prev => (prev + 1) % promotionalBanners.length);
        }, 4000);
        return () => clearInterval(bannerTimer);
    }, []);

    // Promotional banners
    const promotionalBanners = [
        {
            id: 1,
            title: "BLACK FRIDAY SALE",
            subtitle: "Up to 70% OFF on Premium Headphones",
            description: "Limited time offer on JBL, Boat & Apple",
            image: require("../resources/offer/offer1.jpg"),
            buttonText: "Shop Now",
            buttonLink: "/shop?type=anc",
            discount: "70% OFF"
        },
        {
            id: 2,
            title: "BIG BILLION DAYS",
            subtitle: "Get 20% OFF on Your First Order",
            description: "Use code: NEW20 at checkout",
            image: require("../resources/offer/offer2.jpg"),
            buttonText: "Claim Offer",
            buttonLink: "/shop",
            discount: "20% OFF"
        },
        {
            id: 3,
            title: "WEEKEND SPECIAL",
            subtitle: "Buy 2 Get 1 Free on Gaming Headsets",
            description: "Perfect for multiplayer gaming sessions",
            image: require("../resources/offer/offer3.jpg"),
            buttonText: "Explore Gaming",
            buttonLink: "/shop?type=gaming",
            discount: "B2G1"
        }
    ];

    // Flash sale products (with discounts)
    const flashSaleProducts = [
        {
            ...products.find(p => p.id === 'anc-1'),
            originalPrice: '₹49,990',
            discount: 30,
            salePrice: '₹34,990',
            stock: 15
        },
        {
            ...products.find(p => p.id === 'wl-6'),
            originalPrice: '₹29,900',
            discount: 25,
            salePrice: '₹22,425',
            stock: 8
        },
        {
            ...products.find(p => p.id === 'gm-3'),
            originalPrice: '₹24,999',
            discount: 40,
            salePrice: '₹14,999',
            stock: 12
        },
        {
            ...products.find(p => p.id === 'eb-1'),
            originalPrice: '₹24,900',
            discount: 35,
            salePrice: '₹16,185',
            stock: 20
        }
    ];

    // Daily deals
    const dailyDeals = [
        {
            id: 'dd-1',
            name: 'JBL Tune 510BT',
            originalPrice: '₹3,999',
            salePrice: '₹2,499',
            discount: 38,
            image: require("../resources/Earphones/JBL.jpeg"),
            type: 'wireless',
            endTime: 'Today 11:59 PM'
        },
        {
            id: 'dd-2',
            name: 'realme Buds Air 3 Neo',
            originalPrice: '₹2,999',
            salePrice: '₹1,799',
            discount: 40,
            image: require("../resources/Earphones/realmeT200.jpeg"),
            type: 'earbuds',
            endTime: 'Today 11:59 PM'
        },
        {
            id: 'dd-3',
            name: 'boAt Rockerz 450',
            originalPrice: '₹1,999',
            salePrice: '₹1,299',
            discount: 35,
            image: require("../resources/Earphones/oneplus.jpeg"),
            type: 'wireless',
            endTime: 'Today 11:59 PM'
        }
    ];

    // Category deals
    const categoryDeals = [
        {
            category: 'Wireless',
            discount: 'Up to 50% OFF',
            image: require("../resources/Earphones/oneplus.jpeg"),
            link: '/shop?type=wireless',
            count: '12 deals'
        },
        {
            category: 'Gaming',
            discount: 'Up to 60% OFF',
            image: require("../resources/Earphones/Gaming.jpeg"),
            link: '/shop?type=gaming',
            count: '8 deals'
        },
        {
            category: 'Earbuds',
            discount: 'Up to 45% OFF',
            image: require("../resources/Earphones/nothing.jpeg"),
            link: '/shop?type=earbuds',
            count: '10 deals'
        },
        {
            category: 'ANC',
            discount: 'Up to 70% OFF',
            image: require("../resources/Earphones/JBL.jpeg"),
            link: '/shop?type=anc',
            count: '6 deals'
        },
        {
            category: 'Premium',
            discount: 'Up to 80% OFF',
            image: require("../resources/Earphones/sony_wh_ch520.svg"),
            link: '/shop?type=premium',
            count: '4 deals'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Banner Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                {promotionalBanners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBanner ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div className="absolute inset-0">
                            <img
                                src={banner.image}
                                alt={banner.title}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        </div>
                        <div className="relative h-full flex items-center">
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <div className="text-white mb-6 md:mb-0 md:mr-8">
                                        <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                                            {banner.discount}
                                        </div>
                                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                            {banner.title}
                                        </h1>
                                        <h2 className="text-2xl md:text-3xl mb-4 text-red-300">
                                            {banner.subtitle}
                                        </h2>
                                        <p className="text-lg text-gray-200 mb-6">
                                            {banner.description}
                                        </p>
                                        <Link
                                            to={banner.buttonLink}
                                            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                                        >
                                            {banner.buttonText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Banner Navigation Dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {promotionalBanners.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentBanner(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentBanner
                                ? 'bg-white scale-125'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Flash Sale Section */}
            <section className="py-12 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">⚡ FLASH SALE</h2>
                        <p className="text-xl text-red-100 mb-6">Limited time offers - Don't miss out!</p>

                        {/* Countdown Timer */}
                        <div className="flex justify-center space-x-4 mb-8">
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center min-w-[100px] border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl font-bold text-white drop-shadow-lg">{String(timeLeft.hours).padStart(2, '0')}</div>
                                <div className="text-sm text-white/90 font-medium mt-1">Hours</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center min-w-[100px] border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl font-bold text-white drop-shadow-lg">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                <div className="text-sm text-white/90 font-medium mt-1">Minutes</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center min-w-[100px] border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300">
                                <div className="text-3xl font-bold text-white drop-shadow-lg">{String(timeLeft.seconds).padStart(2, '0')}</div>
                                <div className="text-sm text-white/90 font-medium mt-1">Seconds</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {flashSaleProducts.map((product) => (
                            <div key={product.id} className="bg-white/10 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300">
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-contain bg-gray-100"
                                    />
                                    <div className="absolute top-2 left-2">
                                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">
                                            {product.discount}% OFF
                                        </span>
                                    </div>
                                    <div className="absolute top-2 right-2">
                                        <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                                            Only {product.stock} left
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-white mb-2 drop-shadow-lg">{product.name}</h3>
                                    <div className="flex items-center mb-3">
                                        <span className="text-2xl font-bold text-yellow-300 drop-shadow-lg">{product.salePrice}</span>
                                        <span className="text-white/70 line-through ml-2">{product.originalPrice}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex-1 mr-2 border border-white/30 font-semibold"
                                        >
                                            Add to Cart
                                        </button>
                                        <button
                                            onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}
                                            className={`p-2 rounded-lg transition-all duration-200 border border-white/30 ${isInWishlist(product.id)
                                                ? 'bg-white/30 text-white'
                                                : 'bg-white/20 text-white hover:bg-white/30'
                                                }`}
                                        >
                                            <svg className="w-5 h-5" fill={isInWishlist(product.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Deals Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">🔥 Daily Deals</h2>
                        <p className="text-gray-600">New deals every day - Check back tomorrow!</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {dailyDeals.map((deal) => (
                            <div key={deal.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                                <div className="relative mb-4">
                                    <img
                                        src={deal.image}
                                        alt={deal.name}
                                        className="w-full h-48 object-contain bg-white rounded-lg"
                                    />
                                    <div className="absolute top-2 left-2">
                                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                            {deal.discount}% OFF
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{deal.name}</h3>
                                <div className="flex items-center mb-3">
                                    <span className="text-xl font-bold text-red-600">{deal.salePrice}</span>
                                    <span className="text-gray-500 line-through ml-2">{deal.originalPrice}</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm text-gray-500">Ends: {deal.endTime}</span>
                                    <span className="text-xs text-gray-500 capitalize bg-gray-200 px-2 py-1 rounded">
                                        {deal.type}
                                    </span>
                                </div>
                                <button
                                    onClick={() => addToCart(deal)}
                                    className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Deals Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Category Deals</h2>
                        <p className="text-gray-600">Explore deals by category</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {categoryDeals.map((category, index) => (
                            <Link
                                key={index}
                                to={category.link}
                                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden"
                            >
                                <div className="relative">
                                    <img
                                        src={category.image}
                                        alt={category.category}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-300"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                                            <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">{category.category}</h3>
                                            <p className="text-yellow-300 font-bold mb-1 drop-shadow-lg text-lg">{category.discount}</p>
                                            <p className="text-white/90 text-sm font-medium drop-shadow-lg">{category.count}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Offers Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">🎁 Special Offers</h2>
                        <p className="text-gray-600">Exclusive deals and bundles</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Bundle Offer */}
                        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">🎧 Bundle & Save</h3>
                            <p className="text-purple-100 mb-6">Get a wireless headphone + earbuds combo at 25% off</p>
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-3xl font-bold">₹8,999</div>
                                <div className="text-purple-200 line-through">₹11,999</div>
                            </div>
                            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                                View Bundle
                            </button>
                        </div>

                        {/* Student Offer */}
                        <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-lg p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">🎓 Student Discount</h3>
                            <p className="text-green-100 mb-6">Get 15% off on all products with valid student ID</p>
                            <div className="mb-6">
                                <div className="text-3xl font-bold">15% OFF</div>
                                <div className="text-green-200">On entire order</div>
                            </div>
                            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                                Verify Student ID
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-red-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">💌 Never Miss a Deal</h2>
                    <p className="text-red-100 mb-8">Subscribe to get exclusive deals, flash sales, and early access to new products</p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                            Subscribe
                        </button>
                    </div>
                    <p className="text-red-200 text-sm mt-4">Get ₹500 off on your first order when you subscribe!</p>
                </div>
            </section>
        </div>
    );
}

export default Deals;
