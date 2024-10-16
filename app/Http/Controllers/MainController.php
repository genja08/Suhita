<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

use App\Models\Products;
use App\Models\Review;
use App\Models\Gallery;
use App\Models\Setting;
use App\Models\About;

use Illuminate\Support\Facades\Storage;

class MainController extends Controller
{

    public function beranda() {
        $abouts = About::all();
        $galleries = Gallery::all();
        // $setting = Setting::first();

        // $str = $setting->youtube;
        // $arr = explode("=",$str);

        return Inertia::render('Beranda', [
            'abouts' => $abouts,
            'galleries' => $galleries,
            // 'youtube' => $arr[1]
        ]);
    }

    public function tentang(){
        $abouts = About::all();
        $galleries = Gallery::all();
        $setting = Setting::first();

        // $str = $setting->youtube;
        // $arr = explode("=",$str);

        // dd($setting->youtube);

        return Inertia::render('Tentang', [
            'abouts' => $abouts,
            'galleries' => $galleries,
            // 'youtube' => $arr[1]
        ]);
    }
    
    public function produk(){
        $products = Products::where('ketersediaan', 1)->get();
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