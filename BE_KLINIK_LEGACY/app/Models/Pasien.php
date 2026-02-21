<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pasien extends Model
{
    protected $fillable = [
        'id',
        'nik_pasien', 
        'nama_pasien',
        'tanggal_lahir',
        'jenis_kelamin',
        'alamat', 
        'no_telp', 
        'email_pasien', 
        'created_at', 
        'updated_at'
    ];
}
