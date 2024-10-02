<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProdukController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\GalleryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'canBeranda' => Route::has(name: 'beranda'),

//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Admin/views/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


//ADMIN PRODUK
Route::get('/admin/produk', [ProdukController::class, 'index'])
->middleware(['auth', 'verified'])->name('produk');

Route::get('/admin/tambahproduk', [ProdukController::class, 'create'])
->middleware(['auth', 'verified'])->name('createproduk');

Route::post('/admin/storeproduk', [ProdukController::class, 'store'])
    ->middleware(['auth', 'verified'])->name('products.store');
    
Route::post('/admin/updateproduk/{id}', [ProdukController::class, 'update'])->name('products.update');
Route::delete('/admin/deleteproduk/{id}', [ProdukController::class, 'destroy'])->name('products.destroy');


// ADMIN ABOUT
Route::get('/admin/tentang', [AboutController::class, 'index'])
->middleware(['auth', 'verified'])->name('tentang');

Route::get('/admin/tambahabout', [AboutController::class, 'create'])
->middleware(['auth', 'verified'])->name('createabout');

Route::post('/admin/storeabout', [AboutController::class, 'store'])
    ->middleware(['auth', 'verified'])->name('abouts.store');

Route::post('/admin/updateabout/{id}', [AboutController::class, 'update'])->name('abouts.update');
Route::delete('/admin/deleteabout/{id}', [AboutController::class, 'destroy'])->name('abouts.destroy');


// ADMIN ABOUT
Route::get('/admin/review', [ReviewController::class, 'index'])
->middleware(['auth', 'verified'])->name('review');

Route::get('/admin/tambahreview', [ReviewController::class, 'create'])
->middleware(['auth', 'verified'])->name('createreview');

Route::post('/admin/storereview', [ReviewController::class, 'store'])
->middleware(['auth', 'verified'])->name('reviews.store');

Route::post('/admin/updatereview/{id}', [ReviewController::class, 'update'])->name('reviews.update');
Route::delete('/admin/deletereview/{id}', [ReviewController::class, 'destroy'])->name('reviews.destroy');


// ADMIN GALLERY
Route::get('/admin/gallery', [GalleryController::class, 'index'])
->middleware(['auth', 'verified'])->name('gallery');

Route::get('/admin/tambahgallery', [GalleryController::class, 'create'])
->middleware(['auth', 'verified'])->name('creategallery');

Route::post('/admin/storegallery', [GalleryController::class, 'store'])
->middleware(['auth', 'verified'])->name('gallery.store');

Route::delete('/admin/deletegallery/{id}', [GalleryController::class, 'destroy'])->name('gallery.destroy');



Route::get('/', function () {
    return Inertia::render('Beranda');
});
Route::get('/tentang', function () {
    return Inertia::render('Tentang');
});
Route::get('/produk', function () {
    return Inertia::render('Produk');
});
Route::get('/kontak', function () {
    return Inertia::render('Kontak');
});

// Route::get('/dashboardadmin', function () {
//     return Inertia::render('Admin/views/Dashboard');
// });

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
