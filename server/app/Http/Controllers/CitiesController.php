<?php

namespace App\Http\Controllers;

use App\Models\cities;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CitiesController extends Controller
{
    function getcity()
    {
        try {
            return cities::getcity();
        } catch (Exception $e) {
            Log::error('Exception: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
        }
    }

    function postcity(Request $req)
    {
        try {
            cities::postcity($req->name, $req->country, $req->info, $req->image);
            return response()->json(['message' => 'Added Successfully'], 201);
        } catch (Exception $e) {
            Log::error('Exception: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
        }
    }
}
