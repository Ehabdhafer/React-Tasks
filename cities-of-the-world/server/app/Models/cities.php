<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;

class cities extends Model
{
    protected $table = 'cities';
    protected $fillable = ['name', 'country', 'info', 'image'];


    protected static function getcity()
    {
        try {
            return self::get();
        } catch (Exception $e) {
            throw $e;
        }
    }

    protected static function postcity($name, $country, $info, $image)
    {
        try {
            return self::create([
                'name' => $name, 'country' => $country,
                'info' => $info, 'image' => $image
            ]);
        } catch (Exception $e) {
            throw $e;
        }
    }
}
