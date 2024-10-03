<?php

use App\Http\Controllers\{
    MainController,
    ProfileController,
    ProdukController,
    AboutController,
    ReviewController,
    GalleryController
};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Dashboard Route
Route::get('/dashboard', function () {
    return Inertia::render('Admin/views/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// ADMIN Routes Grouped by Functionality
Route::middleware(['auth', 'verified'])->group(function () {
    
    // ADMIN PRODUK
    Route::prefix('admin')->group(function () {
        Route::get('/produk', [ProdukController::class, 'index'])->name('produk');
        Route::get('/tambahproduk', [ProdukController::class, 'create'])->name('createproduk');
        Route::post('/storeproduk', [ProdukController::class, 'store'])->name('products.store');
        Route::post('/updateproduk/{id}', [ProdukController::class, 'update'])->name('products.update');
        Route::delete('/deleteproduk/{id}', [ProdukController::class, 'destroy'])->name('products.destroy');
    });

    // ADMIN ABOUT
    Route::prefix('admin')->group(function () {
        Route::get('/tentang', [AboutController::class, 'index'])->name('tentang');
        Route::get('/tambahabout', [AboutController::class, 'create'])->name('createabout');
        Route::post('/storeabout', [AboutController::class, 'store'])->name('abouts.store');
        Route::post('/updateabout/{id}', [AboutController::class, 'update'])->name('abouts.update');
        Route::delete('/deleteabout/{id}', [AboutController::class, 'destroy'])->name('abouts.destroy');
    });

    // ADMIN REVIEW
    Route::prefix('admin')->group(function () {
        Route::get('/review', [ReviewController::class, 'index'])->name('review');
        Route::get('/tambahreview', [ReviewController::class, 'create'])->name('createreview');
        Route::post('/storereview', [ReviewController::class, 'store'])->name('reviews.store');
        Route::post('/updatereview/{id}', [ReviewController::class, 'update'])->name('reviews.update');
        Route::delete('/deletereview/{id}', [ReviewController::class, 'destroy'])->name('reviews.destroy');
    });

    // ADMIN GALLERY
    Route::prefix('admin')->group(function () {
        Route::get('/gallery', [GalleryController::class, 'index'])->name('gallery');
        Route::get('/tambahgallery', [GalleryController::class, 'create'])->name('creategallery');
        Route::post('/storegallery', [GalleryController::class, 'store'])->name('gallery.store');
        Route::delete('/deletegallery/{id}', [GalleryController::class, 'destroy'])->name('gallery.destroy');
    });
});

// Public Routes for Main Website
Route::get('/', [MainController::class, 'beranda'])->name('main.beranda');
Route::get('/tentang', [MainController::class, 'tentang'])->name('main.tentang');
Route::get('/produk', [MainController::class, 'produk'])->name('main.produk');
Route::get('/kontak', [MainController::class, 'kontak'])->name('main.kontak');

// Profile Routes (requires authentication)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
