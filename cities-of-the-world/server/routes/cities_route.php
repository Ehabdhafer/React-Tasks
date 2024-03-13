<?php

use App\Http\Controllers\CitiesController;
use Illuminate\Support\Facades\Route;


Route::get('/getcity', [CitiesController::class, 'getcity']);
Route::post('/postcity', [CitiesController::class, 'postcity']);
