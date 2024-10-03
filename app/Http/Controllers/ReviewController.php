<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

use App\Models\Review;
use App\Models\Products;

use Illuminate\Support\Facades\Storage;

class ReviewController extends Controller
{

    public function index() {
        $reviews = Review::join('products', 'reviews.id_produk', '=', 'products.id')
                ->select('reviews.*', 'products.nama_produk')
                ->get();
        
        $products = Products::all(); 
    
        return Inertia::render('Admin/views/Review/index', [
            'reviews' => $reviews,
            'products' => $products
        ]);
    }
    

    public function create(){
        $products = Products::all(); 

        return Inertia::render('Admin/views/Review/create', [
            'products' => $products,
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'id_produk' => 'required',
            'kualitas' => 'required|string',
            'rasa' => 'required|string',
            'ulasan' => 'required|string',
            'rating' => 'required',
        ]);


        $Review = Review::create($validated);
        
        if ($Review) {
            return response()->json(['message' => 'Data berhasil ditambahkan', 'Review' => 'Berhasil'], 200);
        }
        else {
            return response()->json(['message' => 'Data GAGAL ditambahkan', 'Review' => 'GAGAL'], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'id_produk' => 'required',
            'kualitas' => 'required|string',
            'rasa' => 'required|string',
            'ulasan' => 'required|string',
            'rating' => 'required',
        ]);

        $Reviews = Review::findOrFail($id);

        $Reviews->update($validated);

        return response()->json(['message' => 'Data berhasil diupdate']);
    }

    public function destroy($id)
    {
        $Reviews = Review::findOrFail($id);
        $Reviews->delete();

        return response()->json(['message' => 'Data berhasil dihapus']);
    }

}