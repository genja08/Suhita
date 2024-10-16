import React from 'react';
import { Head } from '@inertiajs/react';
import './Beranda.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

export default function Beranda({ abouts, galleries, youtube }) {
  return (
    <>
      <Head title="Beranda">
        {/* Add favicon link here */}
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center beranda">
          <img src="/img/super3-black.png" alt="Gambar 1" className="quote-image" />
          <div className="quote">
            <p className="quote2">
              "MADU SUHITA, PELOPOR MADU MURNI DI INDONESIA BERIZIN KEMENTAN RI, DIPRODUKSI DENGAN RISET DAN TEKNOLOGI MUTAKHIR"
            </p>
            <br />
            <a href="/produk">BELANJA SEKARANG</a>
          </div>
          <img src="/img/super4-black.png" alt="Gambar 2" className="quote-image" />
        </main>

        <section className="about-section">
          <img src="/img/orang.png" alt="Various Suhita products" className="about-image" />
          <p className="about-text">
            Suhita melestarikan budaya Nusantara dengan madu murni sebagai pendamping aktivitas harian. Sejak 2016, kami berfokus bersama para beekeeper dan peneliti, menciptakan sistem produksi terintegrasi dari hutan primer Sumatera hingga pemasaran modern, memastikan kualitas produk yang terjamin.
          </p>
        </section>

        <section className="about-section2">
          <img src="/img/allproduk.png" alt="Various Suhita products" className="about-image2" />
          <p className="about-text2">
            Suhita berkomitmen untuk menghasilkan madu murni berkualitas tinggi. Kami mengelola budidaya lebah madu sendiri, dengan jenis lebah madu bersengat dan tanpa sengat. Setiap tetes madu Suhita adalah hasil dari dedikasi kami terhadap keaslian dan kemurnian. Suhita telah memperoleh sertifikat Nomor Kontrol Veteriner (NKV) dari Dinas Peternakan, sebagai bukti bahwa produk kami memenuhi standar kesehatan dan kebersihan yang ketat. Kami terus berupaya untuk memberikan yang terbaik bagi Anda dan keluarga.
          </p>
        </section>

        <div class="title-container">
          <h2 class="section-title">PURE FROM NATURE</h2>
        </div>
        
        <section className="bee-types">
          {abouts.map((item, index) => (
            <div key={index} className={`bee-type ${index % 2 === 1 ? 'reverse' : ''}`}>
              {index % 2 === 0 && (
                <img src={`https://suhita.id${item.gambar}`} alt={item.judul} className="bee-image" />
              )}
              <div>
                <h3 className="bee-title">{item.judul}</h3>
                <p className="bee-description">{item.deskripsi}</p>
              </div>
              {index % 2 === 1 && (
                <img src={`https://suhita.id${item.gambar}`} alt={item.judul} className="bee-image" />
              )}
            </div>
          ))}
        </section>

        {/* Uncomment video section if needed */}
        <div className="video-section">
          <h1 className="video-title">VIDEO</h1>
          <div className="video-container">
            <iframe
              width="1280"
              height="720"
              src={`https://www.youtube.com/embed/${youtube}`}
              title="CARA BUDIDAYA LEBAH MADU DI SUHITA BEE FARM - LAMPUNG"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div className="video-info">
            <div className="video-text">
              <h2>Field Trip Lembah Suhita-Suhita Bee FARM (Eduwisata Lebah, Ecoprint, Healing Place)</h2>
              <p>
                Dalam perjalanan pendidikan yang penuh petualangan, siswa-siswa DCC Global School menyelami dunia keajaiban madu di peternakan Lembah Suhita.
              </p>
            </div>
            <img src="/img/video2.png" alt="Group of students at Suhita Bee Farm" className="video-image" />
          </div>

          <div className="video-info reverse">
            <img src="/img/video3.png" alt="Students monitoring bees" className="video-image" />
            <div className="video-text">
              <h2>Monitoring Mahasiswa Kerja Praktik di Suhita Bee Farm</h2>
              <p>
                Sebagai bagian dari proses monitoring kegiatan Kerja Praktik yang dilakukan oleh mahasiswa, Universitas Lampung melakukan kunjungan ke Suhita Bee Farm.
              </p>
            </div>
          </div>
        </div>

        <div className="gallery-section">
          <h1 className="video-title">GALERI</h1>
          <div className="gallery-grid">
            {galleries.map((gallery, index) => (
              <img key={index} src={`https://suhita.id${gallery.gambar}`} alt={`Image ${index + 1}`} className="gallery-image" />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
