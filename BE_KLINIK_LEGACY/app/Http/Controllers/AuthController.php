<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function getUserById(string $id)
    {
        return User::findOrFail($id);
    }

    public function register(Request $request)
    {
     $request->validate([
            "nama" => "required",
            "email" => "required:email|unique:users",
            "password" => "required|min:6",
            "role" => "in:CRM,PERAWAT,DOKTER,KASIR"
     ]);


    $user= User::create([
        "nama" => $request->nama,
        "email" => $request->email,
        "password" => bcrypt($request->password),
        "role" => $request->role ?? 'CRM'
    ]);
    return response()->json([
        "message" => "User registered successfully",
        "user" => $user
    ], 201);

   }  

   public function login(Request $request)
   {
    $request->validate([
        "email" => "required",
        "password" => "required"
    ]);

    $user = User::where("email", $request->email)->first();
 
    
    if(!$user || !Hash::check($request->password, $user->password)){
        return response()->json([
            "message" => "Invalid credentials"
        ], 401);
     } else {
        $token = $user->createToken('api_token')->plainTextToken;
        return response()->json([
            "message" => "User logged in successfully",
            "access_token" => $token,
            "token_type" => "Bearer",
            "user" => $user,
        ],200 );
     }
    
   

    }
    

}