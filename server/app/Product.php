<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  protected $fillable = ['id', 'type', 'name', 'weight', 'price', 'img'];
  public $timestamps = true;

}