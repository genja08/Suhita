<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $table = 'products';

    protected $fillable = [
        'nama_produk',
        'deskripsi',
        'harga',
        'gambar_produk',
        'ketersediaan',
        'is_deleted'
    ];
}
