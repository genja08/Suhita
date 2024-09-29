import React from 'react';
import { Head } from '@inertiajs/react';
import './Tentang.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

export default function Tentang() {
    return (
        <>
        <Head title="Beranda" />
        <div className="min-h-screen flex flex-col">
        <Navbar />
        <div>
            <main className="main-content">
                <section className="about-section">
                    <img src="https://placehold.co/300x400" alt="Various Suhita products" className="about-image" />
                        <p className="about-text">
                            Suhita, melestarikan budaya Nusantara dengan madu murni sebagai pendamping aktivitas harian. Sejak 2016, kami fokus bersama para beekeeper dan peneliti di bidang lebah dan turunan nya, menciptakan sistem produksi terintegrasi dari hutan primer Sumatera hingga pemasaran modern, memastikan kualitas produk yang dapat terjamin mutu dan ketelusurannya.
                        </p>
                        </section>
                        <h2 className="section-title">PURE FROM NATURE</h2>
                        <section className="bee-types">
                            <div className="bee-type">
                                <img src="https://placehold.co/200x200" alt="Apis Mellifera bees" className="bee-image" />
                                <div>
                                    <h3 className="bee-title">Apis Mellifera</h3>
                                    <p className="bee-description">
                                        Lebah Apis mellifera, atau lebah dengan sengat dari Eropa. Lebah ini terkenal karena produktivitas tinggi dan menghasilkan madu berkualitas unggul.
                                    </p>
                                </div>
                            </div>
                            <div className="bee-type reverse">
                                <div>
                                    <h3 className="bee-title">Trigona</h3>
                                    <p className="bee-description">
                                        Lebah Trigona, juga dikenal sebagai lebah tanpa sengat atau kelulut, menawarkan madu dengan karakteristik unik yang kaya akan manfaat kesehatan.
                                    </p>
                                </div>
                                <img src="https://placehold.co/200x200" alt="Trigona bees" className="bee-image" />
                            </div>
                            <div className="bee-type">
                                <img src="https://placehold.co/200x200" alt="Rain Forest Honey" className="bee-image" />
                                <div>
                                    <h3 className="bee-title">Rain Forest Honey</h3>
                                    <p className="bee-description">
                                        Berasal dari jenis lebah dengan sengat Apis dorsata yang sering disebut dengan nama daerah yaitu lebah gung, lebah sialang yang hidup liar di hutan-hutan tropis.
                                    </p>
                            </div>
                    </div>
                </section>
            </main>

      <div className="video-section">
                <h1 className="video-title">VIDEO</h1>
                <div className="video-container">
                    <img src="https://placehold.co/800x450" alt="Video thumbnail" className="video-thumbnail" />
                </div>
                <div className="video-info">
                    <div className="video-text">
                        <h2>Field Trip Lembah Suhita</h2>
                        <p>Dalam perjalanan pendidikan, siswa-siswa DCC Global School menyelami dunia keajaiban madu di peternakan Lembah Suhita.</p>
                    </div>
                    <img src="https://placehold.co/400x300" alt="Group of students at Suhita Bee Farm" className="video-image" />
                </div>
                <div className="video-info reverse">
                    <img src="https://placehold.co/400x300" alt="Students monitoring bees" className="video-image" />
                    <div className="video-text">
                        <h2>Monitoring Mahasiswa Kerja Praktik</h2>
                        <p>Bandar Lampung, 18 Maret 2022. Sebagai bagian dari proses monitoring kegiatan Kerja Praktik yang dilakukan oleh mahasiswa.</p>
                    </div>
                </div>
            </div>

            <div className="gallery-section">
                <button className="gallery-button">Galeri</button>
                <div className="gallery-grid">
                    {[...Array(8)].map((_, index) => (
                        <img key={index} src={`https://placehold.co/200x200`} alt={`Image ${index + 1}`} className="gallery-image" />
                    ))}
                </div>
                <div className="gallery-text">
                    <p>Ditengah gempuran industrialisasi makanan dan minuman. Banyak produsen yang kurang bertanggung jawab dengan produk yang diproduksinya.</p>
                    <p>Madu Suhita berusaha mempertahankan kemurnian madu yang berasal dari nektar alami, dengan praktik pertanian berkelanjutan.</p>
                </div>
                <div className="decorative-icon">
                    <img src="https://placehold.co/50x50" alt="Decorative icon" />
                </div>
            </div>
            
        </div>
        <Footer />
        </div>
        </>
    )
};

