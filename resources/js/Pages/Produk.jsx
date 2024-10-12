import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import './Produk.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { DarkModeSwitch } from 'react-toggle-dark-mode'; // Import the switch



// ... (products and reviews arrays)

const ReviewCard = ({ gambar_produk, kualitas, rasa, ulasan, rating }) => (
    <div className="review-card">
        <div className="review-image-container">
            <img src={`https://suhita.id${gambar_produk}`} alt="Product image" className="review-image" />
        </div>
        <div className="review-details">
            <p className="review-quality"><strong>Kualitas:</strong> {kualitas}</p>
            <p className="review-taste"><strong>Rasa:</strong> {rasa}</p>
            <p className="review-text">"{ulasan}"</p>
            <div className="rating">
                {Array(rating).fill().map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
                ))}
            </div>
        </div>
    </div>
);

export default function Produk({products, reviews}) {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    const getImageSrc = (image) => {
        return isDarkMode
            ? `/img/${image}-black.png`
            : `/img/${image}-white.png`;
    };

    return (
        <>
            <Head title="Produk">
                {/* Add favicon link here */}
                <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
            </Head>
            <div className={`min-h-screen flex flex-col ${isDarkMode ? 'black' : 'white'}`}>
                <Navbar />
                <div className="app">
                    <main className="main-content">
                    <DarkModeSwitch
                        style={{ marginTop: '5rem' }}
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={50}
                    />

                        <section className="intro">
                            <div className="intro-image-wrapper">
                                <div className="intro-bg"></div>
                                <img src="/img/orang.png" alt="Person holding honeycomb" className="intro-image" />
                            </div>
                            <div className="intro-text">
                                <p>Madu suhita berusaha dan tetap konsisten membangun dan mempertahankan kemurnian madu yang berasal dari nektar alami, Menerapkan praktik pertanian berkelanjutan untuk memastikan setiap tetes madu yang kalian nikmati berasal dari sumber yang bertanggung jawab terhadap lingkungan.</p>
                            </div>
                        </section>

                        <section className="products-section">
                            <h2 className="section-title">Produk Kami</h2>
                            <div className="products-grid">
                                {products.map((product) => (
                                    <div key={product.id} className="product-card">
                                        <img src={`https://suhita.id${product.gambar_produk}`} alt={product.nama_produk} className="product-image" />
                                        <div className="product-info">
                                            <div className="product-details">
                                                <p className="product-name">{product.nama_produk}</p>
                                                <p className="product-price">Rp{new Intl.NumberFormat('id-ID').format(product.harga)}</p>
                                            </div>
                                            <button
                                                className="buy-button"
                                                onClick={() => {
                                                    const productName = product.nama_produk.replace(/ /g, " "); // Replace spaces in product name
                                                    const message = `I am interested in your product: ${productName}`; // Custom message with spaces
                                                    window.open(`https://wa.me/6282279255702?text=${encodeURIComponent(message)}`, '_blank');
                                                  }}
                                                >
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="reviews-section">
                            <h2 className="section-title">Customer Reviews</h2>
                            <div className="reviews">
                                {reviews.map((review, index) => (
                                    <ReviewCard key={index} {...review} />
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
                <Footer />
            </div>
        </>
    );
}
