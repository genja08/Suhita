import React, { useState } from 'react'; // Import useState
import { Head } from '@inertiajs/react';
import './Tentang.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';
import { DarkModeSwitch } from 'react-toggle-dark-mode'; // Import the switch

export default function Tentang({ abouts, galleries, youtube }) {
    // const [theme, setTheme] = useState('white'); // State to manage theme

    // const toggleTheme = () => {
    //     setTheme((prev) => (prev === 'white' ? 'black' : 'white'));
    // };

    // const getImageSrc = (image) => {
    //     if (theme === 'black') {
    //         return `/img/${image}-black.png`; // Path for black theme images
    //     }
    //     return `/img/${image}-white.png`; // Path for white theme images
    // };

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
            <Head title="Tentang Kami">
                {/* Add favicon link here */}
                <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
            </Head>
            <div className={`min-h-screen flex flex-col ${isDarkMode ? 'black' : 'white'}`}>
                <Navbar />
                <div className="main-content">
                    <DarkModeSwitch
                        style={{ marginTop: '5rem' }}
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={50}
                    />
                    <div className="content">
                        <img src={getImageSrc('super3')} alt="" />
                        <p>
                            Di tengah gempuran industrialisasi makanan dan minuman, banyak produsen yang kurang bertanggung jawab dengan produk mereka. Hampir semua kemasan mengandung pemanis sintetik yang membahayakan kesehatan manusia, seperti gula sintetik yang menjadi penyebab utama penyakit degeneratif, diabetes, obesitas, ginjal, dan jantung.
                        </p>
                        <div className="divider" />
                        <p>
                            Madu Suhita berusaha dan konsisten menjaga kemurnian madu yang berasal dari nektar alami, menerapkan praktik pertanian berkelanjutan untuk memastikan setiap tetes madu berasal dari sumber yang bertanggung jawab terhadap lingkungan.
                        </p>
                        <div className="divider" />
                        <p>
                            Bersama Madu Suhita, Anda dapat menikmati manfaat alami dari madu murni sekaligus mendukung kelestarian alam.
                        </p>
                        <div className="divider" />
                        <img src={getImageSrc('super4')} alt="" />
                    </div>


                    {/* <section className="about-section">
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
                            src="/img/allproduk.png"
                            alt="Various Suhita products"
                            className="about-image2"
                        />
                        <p className="about-text2">
                            Suhita berkomitmen untuk menghasilkan madu murni berkualitas tinggi. Kami mengelola budidaya lebah madu sendiri, dengan jenis lebah madu bersengat dan tanpa sengat. Setiap tetes madu Suhita adalah hasil dari dedikasi kami terhadap keaslian dan kemurnian. Suhita telah memperoleh sertifikat Nomor Kontrol Veteriner (NKV) dari Dinas Peternakan, sebagai bukti bahwa produk kami memenuhi standar kesehatan dan kebersihan yang ketat. Kami terus berupaya untuk memberikan yang terbaik bagi Anda dan keluarga.
                        </p>
                    </section>
                    



                    <h2 className="section-title">PURE FROM NATURE</h2>

                    <section className="bee-types">
                        {abouts.map((item, index) => (
                            <div key={index} className={`bee-type ${index % 2 === 1 ? 'reverse' : ''}`}>
                            {index % 2 === 0 && (
                                <img
                                src={`https://suhita.id${item.gambar}`}
                                alt={item.judul}
                                className="bee-image"
                                />
                            )}
                            <div>
                                <h3 className="bee-title">{item.judul}</h3>
                                <p className="bee-description">{item.deskripsi}</p>
                            </div>
                            {index % 2 === 1 && (
                                <img
                                src={`https://suhita.id${item.gambar}`}
                                alt={item.judul}
                                className="bee-image"
                                />
                            )}
                            </div>
                        ))}
                    </section>

                    {/* <div className="video-section">
                        <h1 className="video-title">VIDEO</h1>
                        <div className="video-container">
                        <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${youtube}`} title="CARA BUDIDAYA LEBAH MADU DI SUHITA BEE FARM  - LAMPUNG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
                    </div> */}

                    {/* <div className="gallery-section">
                        <h1 className="video-title">GALERI</h1>
                        <div className="gallery-grid">
                            {galleries.map((gallery, index) => (
                                <img
                                    key={index}
                                    src={`https://suhita.id${gallery.gambar}`}
                                    alt={`Image ${index + 1}`}
                                    className="gallery-image"
                                />
                            ))}
                        </div>
                    </div> */}
                </div>
                <Footer />
            </div>
        </>
    );
}
