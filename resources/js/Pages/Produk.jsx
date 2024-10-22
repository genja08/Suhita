import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import './Produk.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper and SwiperSlide
import 'swiper/css';  // Import Swiper styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DarkModeSwitch } from 'react-toggle-dark-mode'; 

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

export default function Produk({ products, reviews }) {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentReviewIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    };
    
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };

    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const itemsPerPage = 9; // Number of products per slide
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const currentProducts = products.slice(currentProductIndex, currentProductIndex + itemsPerPage);

    const goToPreviousProducts = () => {
        setCurrentProductIndex((prevIndex) => (prevIndex === 0 ? (totalPages - 1) * itemsPerPage : prevIndex - itemsPerPage));
    };

    const goToNextProducts = () => {
        setCurrentProductIndex((prevIndex) => (prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage));
    };

    return (
        <>
            <Head title="Produk">
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
                        {/* Bagian Produk */}
                        <section className="about-section">
                            <img
                                src="/img/orang.png"
                                alt="Various Suhita products"
                                className="about-image"
                            />
                            <p className="about-text">
                                Madu suhita berusaha dan tetap konsisten membangun dan mempertahankan kemurnian madu yang berasal dari nektar alami, Menerapkan praktik pertanian berkelanjutan untuk memastikan setiap tetes madu yang kalian nikmati berasal dari sumber yang bertanggung jawab terhadap lingkungan.
                            </p>
                        </section>

                        <section className="products-section">
                            <div className="title">
                                <h2 className="section-title">Produk Kami</h2>
                            </div>

                            <div className="carousel">
                                <button className="carousel-button prev-button" onClick={goToPreviousProducts}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>

                                <div className="products-grid">
                                    {currentProducts.map((product) => (
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
                                                        const productName = product.nama_produk.replace(/ /g, " ");
                                                        const message = `I am interested in your product: ${productName}`;
                                                        window.open(`https://wa.me/6282279255702?text=${encodeURIComponent(message)}`, '_blank');
                                                    }}
                                                >
                                                    Buy Now
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="carousel-button next-button" onClick={goToNextProducts}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </section>

                        {/* Bagian Reviews diubah menjadi Carousel */}
                        <section className="reviews-section">
                            <div className='title'>
                                <h2 className="section-title">Customer Reviews</h2>
                            </div>

                            <div className="carousel">
                                <button className="carousel-button prev-button" onClick={goToPrevious}>
                                    <FontAwesomeIcon icon={faChevronLeft} />
                                </button>

                                <ReviewCard {...reviews[currentReviewIndex]} />

                                <button className="carousel-button next-button" onClick={goToNext}>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </button>
                            </div>
                        </section>
                    </main>
                </div>
                <Footer />
            </div>
        </>
    );
}
