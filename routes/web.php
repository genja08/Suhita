<?php

use App\Http\Controllers\{
    MainController,
    ProfileController,
    ProdukController,
    AboutController,
    ReviewController,
    GalleryController,
    SettingController
};
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Artisan;

Route::get('/clear-cache', function() {
    Artisan::call('cache:clear');
    return "Cache cleared!";
});

Route::get('/clear-view', function() {
    Artisan::call('view:clear');
    return "Cache cleared!";
});



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

    //ADMIN SETTING
    Route::prefix('admin')->group(function () {
        Route::get('/setting', [SettingController::class, 'index'])->name('setting');
        Route::get('/tambahsetting', [SettingController::class, 'create'])->name('createsetting');
        Route::post('/storesetting', [SettingController::class, 'store'])->name('setting.store');
        Route::post('/updatesetting/{id}', [SettingController::class, 'update'])->name('setting.update');
        Route::delete('/deletesetting/{id}', [SettingController::class, 'destroy'])->name('setting.destroy');
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
