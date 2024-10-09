<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $table = 'settings';

    protected $fillable = [
        'youtube',
        'desc_tentang',
        'desc_beranda',
        'wa',
        'ig',
        'email',
        'created_at',
        'updated_at'
    ];
}
