<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

use App\Models\About;
use Illuminate\Support\Facades\Storage;

class AboutController extends Controller
{

    public function index() {
        $abouts = About::all(); 
        return Inertia::render('Admin/views/About/index', [
            'abouts' => $abouts,
        ]);
    }

    public function create(){
        return Inertia::render('Admin/views/About/create');
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);


        if ($request->hasFile('gambar')) {
            $file = $request->file('gambar');
            $extension = $file->getClientOriginalExtension();

            $fileName = Str::random(40) . '.' . $extension;

            $filePath = $file->storeAs('uploads', $fileName, 'public');
            $validated['gambar'] = '/storage/' . $filePath;
        }

        
        
        $about = About::create($validated);
        
        if ($about) {
            return response()->json(['message' => 'Data berhasil ditambahkan', 'about' => 'Berhasil'], 200);
        }
        else {
            return response()->json(['message' => 'Data GAGAL ditambahkan', 'about' => 'GAGAL'], 500);
        }
    }

    // // ProdukController.php

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'judul' => 'required|string|max:255',
            'deskripsi' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $abouts = About::findOrFail($id);

        // Handle file upload if provided
        if ($request->hasFile('gambar')) {
            $file = $request->file('gambar');
            $fileName = time() . '_' . $file->getClientOriginalName();
            $filePath = $file->storeAs('uploads', $fileName, 'public');
            $validated['gambar'] = '/storage/' . $filePath;
        }

        $abouts->update($validated);

        return response()->json(['message' => 'Data berhasil diupdate']);
    }

    public function destroy($id)
    {
        $abouts = About::findOrFail($id);
        $abouts->delete();

        return response()->json(['message' => 'Data berhasil dihapus']);
    }

}