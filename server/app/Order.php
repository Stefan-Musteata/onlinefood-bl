<?php

namespace App;

use App\Product;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  protected $fillable = ['user_id', 'product_id', 'name', 'total_price', 'quantity'];
  public $timestamps = true;

  //Function specialist images
  public function products_img() {
    return $this->belongsTo(Product::class, 'product_id')->select(['id',  'img']);
  }

}