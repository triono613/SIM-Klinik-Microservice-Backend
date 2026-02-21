<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    protected $fillable = [
         'id_kunjungan',
         'id_pasien',
         'tanggal_kunjungan',
         'status_pasien',
         'crm_id',
         'perawat_id',
         'dokter_id',
         'kasir_id',
         'waktu_registrasi',
         'waktu_hadir datetime',
         'waktu_tindakan',
         'waktu_bayar',
         'waktu_selesai',
    ];
}
