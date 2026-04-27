<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PasienController;


Route::post('/register',[App\Http\Controllers\AuthController::class, 'register']);
Route::post('/login',[App\Http\Controllers\AuthController::class, 'login']);


Route::middleware(['auth:sanctum'])->group(function() {
   
    // Route::post('products', [ProductController::class, 'store']);
    // Route::put('products/{id}', [ProductController::class, 'update']);
    Route::get('user',[AuthController::class,'index']);
    Route::get('user/{id}',[AuthController::class,'getUserById']);
    Route::post('pasien', [PasienController::class, 'store']);
    Route::get('pasien', [PasienController::class, 'index']);
    Route::get('pasien/{id}',[PasienController::class,'getPasienById']);
    Route::get('antrian',[PasienController::class,'getDataAntrian']);
    

});
