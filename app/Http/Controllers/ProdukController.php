<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produk;
use Illuminate\Support\Facades\Storage;

class ProdukController extends Controller
{
    public function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'deskripsi' => 'required|string',
        //     'harga' => 'required|numeric',
        //     'gambar' => 'required|image|mimes:png|max:2048',
        //     'ketersediaan' => 'required|in:tersedia,belum_tersedia',
        // ]);

        // $imagePath = $request->file('gambar')->store('produk', 'public');

        // $produk = Produk::create([
        //     'name' => $request->name,
        //     'deskripsi' => $request->deskripsi,
        //     'harga' => $request->harga,
        //     'gambar' => $imagePath,
        //     'ketersediaan' => $request->ketersediaan,
        // ]);

        return response()->json(['message' => 'Produk berhasil ditambahkan', 'produk' => 'HEHEHHE'], 201);
    }
}