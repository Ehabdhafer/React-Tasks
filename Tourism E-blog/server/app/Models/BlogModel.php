<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\QueryException;



class BlogModel extends Model
{
    protected $table = 'blogtable';
    protected $primaryKey = 'blog_id';
    protected $fillable = [
        'author', 'title', 'city', 'description', 'is_deleted', 'user_id'
    ];

    protected static function createblog($author, $title, $city, $description, $user_id)
    {
        try {
            return self::create(['author' => $author, 'title' => $title, 'city' => $city, 'description' => $description, 'user_id' => $user_id,]);
        } catch (QueryException $e) {
            throw $e;
        }
    }

    protected static function getallblogs()
    {
        try {
            return self::where('is_deleted', false)->get();
        } catch (QueryException $e) {
            throw $e;
        }
    }

    protected static function getblogid($id)
    {
        try {
            return self::where('is_deleted', false)
                ->join('usertable', 'usertable.user_id', '=', 'blogtable.user_id')
                ->select('usertable.username', 'blogtable.*')->findorfail($id);
        } catch (QueryException $e) {
            throw $e;
        }
    }
    protected static function updateBlog($id, $user_id, $data)
    {
        try {
            $blog = self::where('user_id', $user_id)->findorfail($id);
            // $blog = self::find($id);
            // $blog = self::where('name','ali')->first();
            // $blog = self::firstwhere('name','ali');

            // we can use this: $blog = self::findorfail($id); alternative of :
            // if (!$blog) {
            //     throw new Exception('Blog not found');
            // }

            $blog->update($data);
            return $blog;
        } catch (Exception $e) {
            throw $e;
        }
    }
    protected static function deleteblog($id, $user_id)
    {
        try {
            $blog = self::where('user_id', $user_id)->findorfail($id)->update(['is_deleted' => true]);
            return $blog;
        } catch (Exception $e) {
            throw $e;
        }
    }
}

// $count = Flight::where('active', 1)->count();

// $max = Flight::where('active', 1)->max('price');
