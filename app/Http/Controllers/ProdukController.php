<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

use App\Models\Products;
use Illuminate\Support\Facades\Storage;

class ProdukController extends Controller
{

    public function index() {
        $products = Products::all(); 
        return Inertia::render('Admin/views/Produk/index', [
            'products' => $products,
        ]);
    }

    public function create(){
        return Inertia::render('Admin/views/Produk/create');
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_produk' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'harga' => 'required',
            'gambar_produk' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'ketersediaan' => 'required',
        ]);


        if ($request->hasFile('gambar_produk')) {
            $file = $request->file('gambar_produk');
            $extension = $file->getClientOriginalExtension();

            $fileName = Str::random(40) . '.' . $extension;

            $filePath = $file->storeAs('uploads', $fileName, 'public');
            $validated['gambar_produk'] = '/storage/' . $filePath;
        }

        
        
        $produk = Products::create($validated);
        
        if ($produk) {
            return response()->json(['message' => 'Produk berhasil ditambahkan', 'produk' => 'Berhasil'], 200);
        }
        else {
            return response()->json(['message' => 'Produk GAGAL ditambahkan', 'produk' => 'GAGAL'], 500);
        }
    }

    // ProdukController.php

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nama_produk' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'harga' => 'required',
            'ketersediaan' => 'required',
            'gambar_produk' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $produk = Products::findOrFail($id);

        // Handle file upload if provided
        if ($request->hasFile('gambar_produk')) {
            $file = $request->file('gambar_produk');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('uploads', $fileName, 'public');
            $validated['gambar_produk'] = '/storage/' . $filePath;
        }

        $produk->update($validated);

        return response()->json(['message' => 'Produk berhasil diupdate']);
    }

    public function destroy($id)
    {
        $produk = Products::findOrFail($id);
        $produk->delete();

        return response()->json(['message' => 'Produk berhasil dihapus']);
    }

}