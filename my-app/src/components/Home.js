import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { addToCart } = useCart();

    //  slider data 
    const heroSlides = [
        {
            id: 1,
            title: "Unleash the Sound",
            subtitle: "Premium Wireless Headphones for Every Beat",
            image: require("../resources/boy.jpg"),
            buttonText: "Shop Wireless",
            buttonLink: "/shop?type=wireless"
        },
        {
            id: 2,
            title: "Feel the Bass",
            subtitle: "Deep Bass Earbuds for Music Lovers",
            image: require("../resources/girl.jpg"),
            buttonText: "Shop Earbuds",
            buttonLink: "/shop?type=earbuds"
        },
        {
            id: 3,
            title: "Game On!",
            subtitle: "Immersive Gaming Headsets for Pro Players",
            image: require("../resources/girl2.jpg"),
            buttonText: "Shop Gaming",
            buttonLink: "/shop?type=gaming"
        }
    ];

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    // Headphone categories
    const categories = [
        { name: "Wireless", icon: "🎧", count: "2,340" },
        { name: "Wired", icon: "🔌", count: "1,120" },
        { name: "Earbuds", icon: "🎶", count: "3,210" },
        { name: "Gaming", icon: "🎮", count: "980" },
        { name: "ANC", icon: "🔇", count: "1,450" },
        { name: "Sports", icon: "🏃‍♂️", count: "870" }
    ];

    // Featured headphone products
    const featuredProducts = [
        {
            id: 1,
            name: "Gaming Earphones",
            price: "₹1099",
            image: require("../resources/Earphones/Gaming.jpeg"),
            category: "Gaming"
        },
        {
            id: 2,
            name: "True Wireless Earbuds",
            price: "₹2,499",
            image: require("../resources/Earphones/nothing.jpeg"),
            category: "Earbuds"
        },
        {
            id: 3,
            name: "Wire Headphones",
            price: "₹899",
            image: require("../resources/Earphones/JBL.jpeg"),
            category: "Wired"
        },
        {
            id: 4,
            name: "Neck Bands",
            price: "₹2,799",
            image: require("../resources/Earphones/oneplus.jpeg"),
            category: "Neck Bands"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Slider Section */}
            <section className="relative h-[500px] md:h-[600px] overflow-hidden">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div
                            className="absolute inset-0"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        </div>
                        <div className="relative h-full flex items-center justify-center">
                            <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                                    {slide.title}
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in-delay">
                                    {slide.subtitle}
                                </p>
                                <div className="animate-fade-in-delay-2">
                                    <Link
                                        to={slide.buttonLink}
                                        className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                                    >
                                        {slide.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Navigation Arrows */}
                <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentSlide
                                    ? 'bg-white scale-125'
                                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Headphone Type</h2>
                        <p className="text-gray-600">Find your perfect sound experience</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category, index) => (
                            <Link
                                key={index}
                                to={`/shop?type=${category.name.toLowerCase()}`}
                                className="group bg-gray-50 rounded-lg p-6 text-center hover:bg-red-50 hover:shadow-lg transition-all duration-200"
                            >
                                <div className="text-4xl mb-3">{category.icon}</div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">{category.count} items</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Headphones</h2>
                        <p className="text-gray-600">Handpicked for audiophiles and music lovers</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden">
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-contain bg-gray-100"
                                    />
                                    <div className="absolute top-2 left-2">
                                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-red-600">{product.price}</span>
                                        <button onClick={() => addToCart(product)} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link
                            to="/shop"
                            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                        >
                            View All Headphones
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🚚</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Delivery</h3>
                            <p className="text-gray-600">Free delivery on orders above ₹499</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🔋</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Long Battery Life</h3>
                            <p className="text-gray-600">Up to 40 hours of non-stop music</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🎵</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">HD Sound</h3>
                            <p className="text-gray-600">Crystal clear audio, deep bass</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 bg-red-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Stay Tuned</h2>
                    <p className="text-red-100 mb-8">Get exclusive headphone deals and new launches in your inbox</p>
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
                </div>
            </section>
        </div>
    );
}

export default Home; 