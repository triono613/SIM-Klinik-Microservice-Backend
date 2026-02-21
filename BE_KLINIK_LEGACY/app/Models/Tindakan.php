<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tindakan extends Model
{
    protected $fillable = [
        'id_tindakan',
        'id_kunjungan', 
        'diagnosa', 
        'tindakan',
        'biaya',
        'created_at'
    ];
}
