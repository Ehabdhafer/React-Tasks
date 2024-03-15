<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Log;


class UserController extends Controller
{
    function register(Request $req)
    {
        try {
            if (User::checkemail($req->email)) {
                return response()->json(['message' => 'User already Exists'], 400);
            };
            $user = User::signup(
                [
                    'email' => $req->input('email'),
                    'username' => $req->input('username'),
                    'password' => $req->input('password'),
                ]
            );
            $token = $user->createToken('token', ['*'], now()->addHours(12))->plainTextToken;
            return response()->json(['message' => 'User signed up successfully', 'token' => $token], 201);
        } catch (Exception $e) {
            Log::error('Exception: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
        }
    }

    function login(Request $req)
    {
        try {
            $user = User::checkemail($req->email);
            if (!$user || !User::checkpass($req->password, $user->password)) {
                return response()->json(["error" => "Email or Password is invalid"], 400);
            }
            $user->tokens->each->delete();
            $token = $user->createToken('token', ['*'], now()->addHours(12))->plainTextToken;
            return response()->json(['message' => "Logged in successfully", 'token' => $token], 200);
        } catch (Exception $e) {
            Log::error('Exception: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
        }
        return $user;
    }
}
