<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

use App\Models\Gallery;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{

    public function index() {
        $galleries = Gallery::all(); 
        return Inertia::render('Admin/views/Gallery/index', [
            'galleries' => $galleries,
        ]);
    }

    public function create(){
        return Inertia::render('Admin/views/Gallery/create');
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'gambar.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $uploadedFiles = [];
        
        if ($request->hasFile('gambar')) {
            foreach ($request->file('gambar') as $file) {
                $extension = $file->getClientOriginalExtension();
                $fileName = Str::random(40) . '.' . $extension;
                $filePath = $file->storeAs('uploads/gallery', $fileName, 'public');
                $uploadedFiles[] = '/storage/' . $filePath;
            }
        }

        foreach ($uploadedFiles as $file) {
            Gallery::create(['gambar' => $file]);
        }

        return response()->json(['message' => 'Foto berhasil ditambahkan', 'data' => 'Berhasil'], 200);
    }


    public function destroy($id)
    {
        $gallery = Gallery::findOrFail($id);
        $gallery->delete();

        return response()->json(['message' => 'Produk berhasil dihapus']);
    }

}