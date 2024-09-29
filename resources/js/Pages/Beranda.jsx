import React from 'react';
import { Head } from '@inertiajs/react';
import './Beranda.css';
import Navbar from '@/Components/Navbar/Navbar';
import Footer from '@/Components/Footer/Footer';

export default function Beranda() {
  return (
    <>
      <Head title="Beranda" />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center bg-gray-100">
          <div className="text-center max-w-2xl mx-auto px-4">
            <p className="text-xl mb-6">
              "MADU SUHITA, PELOPOR MADU MURNI DI INDONESIA BERIZIN KEMENTAN RI, DIPRODUKSI DENGAN RISET DAN TEKNOLOGI MUTAKHIR"
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              BELANJA SEKARANG
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}