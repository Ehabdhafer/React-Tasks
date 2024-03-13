<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\BlogModel;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;




class BlogController extends Controller
{
    function postblog(Request $req)
    {
        try {
            $user = Auth::user();
            $f = BlogModel::createblog(
                $req->input('author'),
                $req->input('title'),
                $req->input('city'),
                $req->input('description'),
                $user->user_id,
            );
            return response()->json(['message' => 'Blog added successfully', $f], 201);
        } catch (Exception $e) {
            Log::error('Exception: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
        }
    }
    function getblog()
    {
        try {
            $blog = BlogModel::getallblogs();
            return response()->json($blog, 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
        }
    }
    function getblogid($id)
    {
        try {
            $blog = BlogModel::getblogid($id);
            if (!$blog) {
                return response()->json(['message' => 'Blog not found'], 404);
            }
            return response()->json($blog, 200);
        } catch (Exception $e) {
            return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
        }
    }
    function updateblog($id, Request $req)
    {
        try {
            $updata = [];
            foreach ($req->input() as $key => $value) {
                if ($req->has($key)) {
                    $updata[$key] = $value;
                }
            }
            $user = Auth::user();

            $data = BlogModel::updateBlog($id, $user->user_id, $updata);

            return response()->json(['message' => 'Blog updated Successfully',  $data], 200);
        } catch (Exception $e) {
            Log::error('Exception: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
        }
    }
    function deleteblog($id)
    {
        try {
            $user = Auth::user();

            BlogModel::deleteblog($id, $user->user_id);
            return response()->json(['message' => 'Blog Deleted Successfully'], 200);
        } catch (Exception $e) {
            Log::error('Exception: ' . $e->getMessage());
            return response()->json(['error' => 'Internal Server Error', 'message' => $e->getMessage()], 500);
        }
    }
}
