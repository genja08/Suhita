<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $table = 'reviews';

    protected $fillable = [
        'id_pengguna',
        'id_produk',
        'kualitas',
        'rasa',
        'ulasan',
        'rating'
    ];
}
