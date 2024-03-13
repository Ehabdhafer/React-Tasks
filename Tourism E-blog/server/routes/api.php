<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\BlogController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::get('getblog', [BlogController::class, 'getblog']);
Route::get('getblogid/{id}', [BlogController::class, 'getblogid']);
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('postblog', [BlogController::class, 'postblog']);
    Route::put('updateblog/{id}', [BlogController::class, 'updateblog']);
    Route::put('deleteblog/{id}', [BlogController::class, 'deleteblog']);
});
