<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

use App\Models\Gallery;
use Illuminate\Support\Facades\Storage;

class MainController extends Controller
{

    public function beranda() {
        return Inertia::render('Beranda');
    }

    public function tentang(){
        return Inertia::render('Tentang');
    }
    
    public function produk(){
        return Inertia::render('Produk');
    }
    
    public function kontak(){
        return Inertia::render('Kontak');
    }

}