<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

use App\Models\Products;
use App\Models\Review;
use App\Models\Gallery;
use App\Models\About;

use Illuminate\Support\Facades\Storage;

class MainController extends Controller
{

    public function beranda() {
        return Inertia::render('Beranda');
    }

    public function tentang(){
        $abouts = About::all();
        $galleries = Gallery::all();

        return Inertia::render('Tentang', [
            'abouts' => $abouts,
            'galleries' => $galleries
        ]);
    }
    
    public function produk(){
        $products = Products::all();
        $reviews = Review::join('products', 'reviews.id_produk', '=', 'products.id')
        ->select('reviews.*', 'products.nama_produk', 'products.gambar_produk')
        ->get();

        return Inertia::render('Produk',[
            'products' => $products,
            'reviews' => $reviews
        ]);
    }
    
    public function kontak(){
        return Inertia::render('Kontak');
    }

}