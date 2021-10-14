<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//For Login and Register
Route::post('user-register', 'Auth\RegisterController@userRegister');

Route::post('user-login', 'Auth\LoginController@userLogin');

Route::get('products', 'ProductController@getProducts');

Route::middleware('auth:users')->get('/user', function (Request $request) {
  return $request->user();
});

Route::group(['middleware' => 'auth:api'], function () {
  Route::post('add-product/{id}', 'ProductController@addProduct');
  Route::get('cabinet/user-data', 'CabinetController@userData');
  Route::get('cabinet/my-cart', 'CabinetController@myCart');
  Route::post('cabinet/final-order', 'CabinetController@sendEmailProducts');
});
