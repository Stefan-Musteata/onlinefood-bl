<?php

namespace App\Http\Controllers;
use App\Product;
use App\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;


class ProductController extends Controller
{
  //Get pay histories
  public function getProducts() { 
    $products = Product::all();
    return $products;
  }

  //Add product in cart
  public function addProduct(Request $request, $id) {

    $product_id = Order::where('user_id', Auth::user()->id)->where('product_id', $id)->value('product_id');
    $quantity = Order::where('user_id', Auth::user()->id)->where('product_id', $id)->value('quantity');
    $total_price = Order::where('user_id', Auth::user()->id)->where('product_id', $id)->value('total_price');

    if($product_id == $id ) {
      $addProduct = Order::where('product_id', $id)->update([
        'user_id' => Auth::user()->id,
        'name' => $request->get('name'),
        'total_price' => $request->get('total_price')+$total_price,
        'quantity' => $request->get('quantity')+$quantity,
        'status' => null
      ]);
    } else {
      $addProduct = Order::create([
        'user_id' => Auth::user()->id,
        'product_id' => $id,
        'name' => $request->get('name'),
        'total_price' => $request->get('total_price'),
        'quantity' => $request->get('quantity'),
      ]);
    }

    return response()->json(['success' => true, 'message' => 'Produsul a fost adăugat cu success!']);
 
  }
}