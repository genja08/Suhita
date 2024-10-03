import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import './Produk.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

// ... (products and reviews arrays)

const ReviewCard = ({ image, quality, taste, review, rating }) => (
    <div className="review-card">
        <img src={image} alt="Product image" className="review-image" />
        <div>
            <p><strong>Kualitas:</strong> {quality}</p>
            <p><strong>Rasa:</strong> {taste}</p>
            <p className="review-text">"{review}"</p>
            <div className="rating">
                {Array(rating).fill().map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                ))}
            </div>
        </div>
    </div>
);

export default function Produk() {
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
                                {/* {products.map((product) => (
                                    <div key={product.id} className="product-card">
                                        <img src={product.image} alt={product.alt} className="product-image" />
                                        <div className="product-info">
                                            <p className="product-name">{product.name}</p>
                                            <p className="product-price">{product.price}</p>
                                            <button className="buy-button">Buy Now</button>
                                        </div>
                                    </div>
                                ))} */}
                            </div>
                        </section>

                        <section className="reviews-section">
                            <h2 className="section-title">Customer Reviews</h2>
                            <div className="reviews">
                                {/* {reviews.map((review, index) => (
                                    <ReviewCard key={index} {...review} />
                                ))} */}
                            </div>
                        </section>
                    </main>
                </div>
                <Footer />
            </div>
        </>
    );
}
