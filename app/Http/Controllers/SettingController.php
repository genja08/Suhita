<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

// use App\Models\Review;
// use App\Models\Products;
use App\Models\Setting;

use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{

    public function index()
    {
        $settings = Setting::first();

        // dd($settings);

        return Inertia::render('Admin/views/Setting/index', [
            'settings' => $settings,
        ]);
    }

    public function create(){
        return Inertia::render('Admin/views/Setting/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'youtube' => 'required|string',
            // 'desc_tentang' => 'required|string',
            // 'desc_beranda' => 'required|string',
            // 'wa' => 'required|string',
            // 'ig' => 'required|string',
            // 'email' => 'required|string',
        ]);


        $setting = Setting::create($validated);
        
        if ($setting) {
            return response()->json(['message' => 'Setting berhasil ditambahkan', 'setting' => 'Berhasil'], 200);
        }
        else {
            return response()->json(['message' => 'Setting GAGAL ditambahkan', 'setting' => 'GAGAL'], 500);
        }
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'youtube' => 'required|string',
            // 'desc_tentang' => 'required|string',
            // 'desc_beranda' => 'required|string',
            // 'wa' => 'required|string',
            // 'ig' => 'required|string',
            // 'email' => 'required|string',
        ]);

        $setting = Setting::findOrFail($id);


        $setting->update($validated);

        return response()->json(['message' => 'Setting berhasil diupdate']);
    }

    public function destroy($id)
    {
        $setting = Setting::findOrFail($id);
        $setting->delete();

        return response()->json(['message' => 'Setting berhasil dihapus']);
    }

}