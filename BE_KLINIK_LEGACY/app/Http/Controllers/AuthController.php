<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

/**
 * @OA\Info(
 *     title="Laravel Sanctum API",
 *     version="1.0.0",
 *     description="API Documentation untuk Laravel Sanctum Authentication",
 *     @OA\Contact(
 *         email="triono.triono1@gmail.com"
 *     )
 * )
 * 
 * @OA\SecurityScheme(
 *     securityScheme="bearerAuth",
 *     type="http",
 *     scheme="bearer",
 *     bearerFormat="JWT"
 * )
 */


/**
     * @OA\Post(
     *     path="/api/register",
     *     tags={"Authentication"},
     *     summary="Register user baru",
     *     description="Mendaftarkan user baru dan mengembalikan access token",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/x-www-form-urlencoded",
     *             @OA\Schema(
     *                 required={"name", "email", "password"},
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", format="email", example="john@example.com"),
     *                 @OA\Property(property="password", type="string", format="password", minLength=6, example="password123")
     *                 @OA\Property(property="role", type="string", example="PERAWAT")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="User berhasil didaftarkan",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 property="data",
     *                 type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", example="john@example.com"),
     *                 @OA\Property(property="created_at", type="string", example="2023-01-01T00:00:00.000000Z"),
     *                 @OA\Property(property="updated_at", type="string", example="2023-01-01T00:00:00.000000Z")
     *             ),
     *             @OA\Property(property="access_token", type="string", example="1|abcdef123456"),
     *             @OA\Property(property="token_type", type="string", example="Bearer")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             @OA\Property(property="name", type="array", @OA\Items(type="string")),
     *             @OA\Property(property="email", type="array", @OA\Items(type="string")),
     *             @OA\Property(property="password", type="array", @OA\Items(type="string"))
     *         )
     *     )
     * )
     */


 /**
     * @OA\Post(
     *     path="/api/login",
     *     tags={"Authentication"},
     *     summary="Login user",
     *     description="Login user dan mengembalikan access token",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/x-www-form-urlencoded",
     *             @OA\Schema(
     *                 required={"email", "password"},
     *                 @OA\Property(property="email", type="string", format="email", example="john@example.com"),
     *                 @OA\Property(property="password", type="string", format="password", example="password123")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Login berhasil",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Login success"),
     *             @OA\Property(property="access_token", type="string", example="1|abcdef123456"),
     *             @OA\Property(property="token_type", type="string", example="Bearer")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Unauthorized")
     *         )
     *     )
     * )
     */







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
        try {
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
        
           } catch (\Illuminate\Validation\ValidationException $e) {
                   return response()->json([
                "message" => "Validation error",
                "errors" => $e->errors()
            ], 422);
        }

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