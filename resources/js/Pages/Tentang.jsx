import React, { useState } from 'react'; // Import useState
import { Head } from '@inertiajs/react';
import './Tentang.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

export default function Tentang() {
    const [theme, setTheme] = useState('white'); // State to manage theme

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'white' ? 'black' : 'white'));
    };

    const getImageSrc = (image) => {
        if (theme === 'black') {
            return `/img/${image}-black.png`; // Path for black theme images
        }
        return `/img/${image}-white.png`; // Path for white theme images
    };

    return (
        <>
            <Head title="Tentang Kami" />
            <div className={`min-h-screen flex flex-col ${theme}`}> {/* Apply theme class */}
                <Navbar />
                <div className="main-content">
                    <button onClick={toggleTheme} className="theme-toggle">
                        Tema {theme === 'white' ? 'Black' : 'White'}
                    </button>
                    <div className="content">
                        <img src={getImageSrc('super3')} alt="" />
                        <p>
                            Di tengah gempuran industrialisasi makanan dan minuman, banyak produsen yang kurang bertanggung jawab dengan produk mereka. Hampir semua kemasan mengandung pemanis sintetik yang membahayakan kesehatan manusia, seperti gula sintetik yang menjadi penyebab utama penyakit degeneratif, diabetes, obesitas, ginjal, dan jantung.
                        </p>
                        <div className="divider" />
                        <p>
                            Madu Suhita berusaha dan konsisten menjaga kemurnian madu yang berasal dari nektar alami, menerapkan praktik pertanian berkelanjutan untuk memastikan setiap tetes madu berasal dari sumber yang bertanggung jawab terhadap lingkungan.
                        </p>
                        <p>
                            Bersama Madu Suhita, Anda dapat menikmati manfaat alami dari madu murni sekaligus mendukung kelestarian alam.
                        </p>
                        <div className="divider" />
                        <img src={getImageSrc('super4')} alt="" />
                    </div>


                    <section className="about-section">
                        <img
                            src="/img/orang.png"
                            alt="Various Suhita products"
                            className="about-image"
                        />
                        <p className="about-text">
                            Suhita melestarikan budaya Nusantara dengan madu murni sebagai pendamping aktivitas harian. Sejak 2016, kami berfokus bersama para beekeeper dan peneliti, menciptakan sistem produksi terintegrasi dari hutan primer Sumatera hingga pemasaran modern, memastikan kualitas produk yang terjamin.
                        </p>
                    </section>

                    <section className='about-section2'>
                    <img
                            src="/img/AllProduk.png"
                            alt="Various Suhita products"
                            className="about-image2"
                        />
                        <p className="about-text2">
                            Suhita berkomitmen untuk menghasilkan madu murni berkualitas tinggi. Kami mengelola budidaya lebah madu sendiri, dengan jenis lebah madu bersengat dan tanpa sengat. Setiap tetes madu Suhita adalah hasil dari dedikasi kami terhadap keaslian dan kemurnian. Suhita telah memperoleh sertifikat Nomor Kontrol Veteriner (NKV) dari Dinas Peternakan, sebagai bukti bahwa produk kami memenuhi standar kesehatan dan kebersihan yang ketat. Kami terus berupaya untuk memberikan yang terbaik bagi Anda dan keluarga.
                        </p>
                    </section>
                    



                    <h2 className="section-title">PURE FROM NATURE</h2>

                    <section className="bee-types">
                        <div className="bee-type">
                            <img
                                src="/img/pure1.png"
                                alt="Apis Mellifera bees"
                                className="bee-image"
                            />
                            <div>
                                <h3 className="bee-title">Apis Mellifera</h3>
                                <p className="bee-description">
                                    Lebah Apis mellifera, lebah dengan sengat dari Eropa, terkenal karena produktivitas tinggi dan madu berkualitas unggul.
                                </p>
                            </div>
                        </div>

                        <div className="bee-type reverse">
                            <div>
                                <h3 className="bee-title">Trigona</h3>
                                <p className="bee-description">
                                    Lebah Trigona, lebah tanpa sengat atau kelulut, menghasilkan madu dengan karakteristik unik yang kaya akan manfaat kesehatan.
                                </p>
                            </div>
                            <img
                                src="/img/pure2.png"
                                alt="Trigona bees"
                                className="bee-image"
                            />
                        </div>

                        <div className="bee-type">
                            <img
                                src="/img/pure3.png"
                                alt="Rain Forest Honey"
                                className="bee-image"
                            />
                            <div>
                                <h3 className="bee-title">Rain Forest Honey</h3>
                                <p className="bee-description">
                                    Dihasilkan oleh lebah Apis dorsata yang hidup di hutan tropis, sering dikenal sebagai lebah gung atau lebah sialang.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="video-section">
                        <h1 className="video-title">VIDEO</h1>
                        <div className="video-container">
                            <img
                                src="/img/video1.png"
                                alt="Video thumbnail"
                                className="video-thumbnail"
                            />
                        </div>

                        <div className="video-info">
                            <div className="video-text">
                                <h2>Field Trip Lembah Suhita-Suhita Bee FARM (Eduwisata Lebah, Ecoprint, Healing Place)</h2>
                                <p>
                                    Dalam perjalanan pendidikan yang penuh petualangan, siswa-siswa DCC Global School menyelami dunia keajaiban madu di peternakan Lembah Suhita. Field trip ini tidak sekadar perjalanan biasa, ini adalah jendela menuju kehidupan lebah dan proses menghasilkan madu yang penuh keunikan.
                                </p>
                            </div>
                            <img
                                src="/img/video2.png"
                                alt="Group of students at Suhita Bee Farm"
                                className="video-image"
                            />
                        </div>

                        <div className="video-info reverse">
                            <img
                                src="/img/video3.png"
                                alt="Students monitoring bees"
                                className="video-image"
                            />
                            <div className="video-text">
                                <h2>Monitoring Mahasiswa Kerja Praktik di Suhita Bee Farm</h2>
                                <p>
                                    Bandar Lampung, 18 Maret 2022. Sebagai bagian dari proses monitoring kegiatan Kerja Praktik yang dilakukan oleh mahasiswa, Jurusan Biologi FMIPA Universitas Lampung melakukan kunjungan ke Suhita Bee Farm atau Peternakan Lebah Madu Suhita yang terletak di Jalan Batin Mangku Negara, Batu Putuk, Kecamatan Teluk Betung Utara, Kota Bandar Lampung. Jumlah mahasiswa yang melakukan kerja praktik di PT.Suhita Bee Farm berjumlah satu orang mahasiswa yaitu Mahfud Sidik dari S1 Biologi angkatan 2019.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-section">
                        <button className="gallery-button">Galeri</button>
                        <div className="gallery-grid">
                            <img src="/img/gallery1.png" alt="Image 1" className="gallery-image" />
                            <img src="/img/gallery2.png" alt="Image 2" className="gallery-image" />
                            <img src="/img/gallery3.png" alt="Image 3" className="gallery-image" />
                            <img src="/img/gallery4.png" alt="Image 4" className="gallery-image" />
                            <img src="/img/gallery5.png" alt="Image 5" className="gallery-image" />
                            <img src="/img/gallery6.png" alt="Image 6" className="gallery-image" />
                            <img src="/img/gallery7.png" alt="Image 7" className="gallery-image" />
                            <img src="/img/gallery8.png" alt="Image 8" className="gallery-image" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
