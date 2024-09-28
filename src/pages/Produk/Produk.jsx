import React from "react";
import "./Produk.css";

const products = [
    { id: 1, name: "Apollonia Madu Hutan Damara - 300gr", price: "Rp500.000", image: "https://placehold.co/300x300", alt: "Apollonia Madu Hutan Damara - 300gr" },
    { id: 2, name: "Melifera Honey - 1Kg", price: "Rp215.000", image: "https://placehold.co/300x300", alt: "Melifera Honey - 1Kg" },
    { id: 3, name: "Thonacca Propolis Honey - 300gr", price: "Rp350.000", image: "https://placehold.co/300x300", alt: "Thonacca Propolis Honey - 300gr" },
    { id: 4, name: "Rain Forest Honey - 650gr", price: "Rp185.000", image: "https://placehold.co/300x300", alt: "Rain Forest Honey - 650gr" },
    { id: 5, name: "Melifera Honey - 385gr", price: "Rp115.000", image: "https://placehold.co/300x300", alt: "Melifera Honey - 385gr" },
    { id: 6, name: "Melifera Honey - 50gr", price: "Rp25.000", image: "https://placehold.co/300x300", alt: "Melifera Honey - 50gr" },
    { id: 7, name: "Rain Forest Honey - 50gr", price: "Rp30.000", image: "https://placehold.co/300x300", alt: "Rain Forest Honey - 50gr" },
    { id: 8, name: "Stingless Bee Honey - 100gr", price: "Rp150.000", image: "https://placehold.co/300x300", alt: "Stingless Bee Honey - 100gr" },
    { id: 9, name: "Stingless Bee Honey - 500gr", price: "Rp275.000", image: "https://placehold.co/300x300", alt: "Stingless Bee Honey - 500gr" }
];

const reviews = [
    { image: "https://placehold.co/100x150", quality: "bagus, packaging cantik, elegan", taste: "enak bangettt", review: "Ga usah diraguin lagi kualitas madunya Suhita, real madu murni asli, yg sachet gini lebih travel friendly, dan anak2ku suka banget rasa madunyaa", rating: 5 },
    { image: "https://placehold.co/100x150", quality: "kualitas terbaik, sangat elegan", taste: "manis, lezat", review: "Madu ini sangat memuaskan, packagingnya rapi, dan rasanya sangat lezat. Cocok untuk sarapan pagi dan tambahan teh.", rating: 4 },
    { image: "https://placehold.co/100x150", quality: "packaging bagus, rapi", taste: "rasanya sangat alami", review: "Saya sangat suka produk ini! Rasanya alami dan packagingnya juga sangat rapi. Sangat cocok untuk keluarga saya.", rating: 4 },
    { image: "https://placehold.co/100x150", quality: "elegan dan berkualitas tinggi", taste: "super enak", review: "Madu berkualitas tinggi dengan rasa yang luar biasa. Saya akan beli lagi. Cocok juga sebagai hadiah untuk teman.", rating: 5 }
];

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

const Produk = () => (
    <div className="app">

        <main className="main">
            <section className="intro">
                <div className="intro-image-wrapper">
                    <div className="intro-bg"></div>
                    <img src="https://placehold.co/300x300" alt="Person holding honeycomb" className="intro-image" />
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
                            <img src={product.image} alt={product.alt} className="product-image" />
                            <div className="product-info">
                                <p className="product-name">{product.name}</p>
                                <p className="product-price">{product.price}</p>
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
);

export default Produk;
