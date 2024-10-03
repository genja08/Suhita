<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProdukController;
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


Route::get('/admin/produk', function () {
    return Inertia::render('Admin/views/Produk/index');
})->middleware(['auth', 'verified'])->name('produk');

Route::get('/admin/tambahproduk', function () {
    return Inertia::render('Admin/views/Produk/create');
})->middleware(['auth', 'verified'])->name('createproduk');


Route::post('/admin/storeproduk', [ProdukController::class, 'store'])
    ->middleware(['auth', 'verified']);

// Route::get('/beranda', function () {
//     return Inertia::render('Beranda');
// })->name('beranda');

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