<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use App\Models\Pasien;
use App\Models\Registration;
use DB; 
use Illuminate\Support\Str;

class PasienController extends Controller
{
 
    public function index()
    {
        // var_dump("masuk");
        return Pasien::all();
    }

     public function getPasienById(string $id)
    {
        return Pasien::findOrFail($id);
    }

    public function getDataAntrian(){
        $results = DB::select("
        SELECT k.id_kunjungan,
               p.nama_pasien,
               k.tanggal_kunjungan,
               k.status_pasien
        FROM registrations k
        JOIN pasiens p ON k.id_pasien = p.id
        ORDER BY k.waktu_hadir ASC" );
        return response()->json($results);
    }
 
    public function store(Request $request)
    {
        try {
               $validatedData =  $request->validate([
                   "nama_pasien" => "required|string|max:255",
                //    "tanggal_lahir" =>'required|date_format:d-m-Y',
                   "tanggal_lahir" =>'required',
                   "jenis_kelamin" => "required|string",
                   "alamat" => "required|string|max:255",
                   "no_telp" => "required|numeric|min:0"
                ]);
               
                $id_generate = (string) Str::uuid()->toString() ;
                $pasien = Pasien::create([
                    'id' => $id_generate,
                    'nik_pasien' => $request->nik_pasien,
                    'nama_pasien' => $request->nama_pasien,
                    'tanggal_lahir' => date('Y-m-d' , strtotime($request->tanggal_lahir)),
                    'jenis_kelamin' => $request->jenis_kelamin,
                    'alamat' => $request->alamat,
                    'no_telp' => $request->no_telp,
                    'email_pasien' => $request->email_pasien,
                    'created_at' => Carbon::now()->toDateTimeString(),
                   
                    // 'expired_at' => date('Y-m-d H:i:s' , strtotime($request->expired_at)),
                ]);



                $registrasi = Registration::create([   
                    'id_pasien' => $id_generate,
                    'tanggal_kunjungan' => Carbon::now()->toDateTimeString(),
                    'status_pasien' => 'Registrasi',
                    'crm_id' =>NULL,
                    'perawat_id' => NULL,
                    'dokter_id' => NULL,
                    'kasir_id' => NULL,
                    'waktu_registrasi' => Carbon::now()->toDateTimeString(),
                    'waktu_hadir' => NULL,
                    'waktu_tindakan' => NULL,
                    'waktu_bayar' => NULL,
                    'waktu_selesai' => NULL,
                ]);

//         dd($request->all());
       
                return response()->json([
                     'message' => 'Pasien created successfully',
                     'data' => [$pasien, $registrasi],
                 ], 201);

        } catch (ValidationException $e) {
           return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        }
    }


    public function show(string $id)
    {
        return Product::findOrFail($id);
    }

  
    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($id);
        $request->validate([
            "name" => "required|string|max:255",
            "sku" => "required|string|unique:products,sku," . $id,
            "quantity" => "required|integer|min:0",
            "price" => "required|numeric|min:0"
        ]);

        $product->update($request->all());
        return response()->json($product, 200);
    }

    
}
