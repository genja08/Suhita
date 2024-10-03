import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import './Produk.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


// ... (products and reviews arrays)

const ReviewCard = ({ gambar_produk, kualitas, rasa, ulasan, rating }) => (
    <div className="review-card">
        <div className="review-image-container">
            <img src={`http://127.0.0.1:8000${gambar_produk}`} alt="Product image" className="review-image" />
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
    const [theme, setTheme] = useState('white'); // Default theme is white

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'white' ? 'black' : 'white'));
    };

    return (
        <>
            <Head title="Produk" />
            <div className={`min-h-screen flex flex-col ${theme}`}>
                <Navbar />
                <div className="app">
                    <main className="main">
                        <button onClick={toggleTheme} className="theme-toggle">
                            Tema {theme === 'white' ? 'Black' : 'White'}
                        </button>

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
                                        <img src={`http://127.0.0.1:8000${product.gambar_produk}`} alt={product.nama_produk} className="product-image" />
                                        <div className="product-info">
                                            <div className="product-details">
                                                <p className="product-name">{product.nama_produk}</p>
                                                <p className="product-price">Rp{new Intl.NumberFormat('id-ID').format(product.harga)}</p>
                                            </div>
                                            <button className="buy-button">Buy Now</button>
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
