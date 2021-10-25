<?php

namespace App\Http\Controllers;

use App\User;
use App\Order;
use Carbon\Carbon;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


use App\Mail\SendEmailUser;
use App\Mail\SendEmailSpecialist;
use App\Mail\SendEmailSpecialistClient;
use App\Mail\SendEmailClientSpecialist;
use Illuminate\Support\Facades\Mail;


class CabinetController extends Controller
{
    public function userData() {
      $user = User::find(Auth::id());
      return $user;
    }

    public function myCart() {
      $my_orders = Order::where('user_id', Auth::id())->with('products_img')->get();
      return $my_orders;
    }


    public function sendEmailProducts() {
    
      $order = Order::where('user_id', Auth::id())->where('status', null)->update([
        'status' => 'success',
      ]);
     
      // $data = [
      //     'status' => 'in proces'
      // ];

      //Mail::to(Auth::user()->email)->send(new SendEmailUser($data));
      //Mail::to('musteatastefan1990@gmail.com')->send(new SendEmailRestaurant($data));

      if($order){
        return response()->json(['success' => TRUE, 'message' => 'Comanda trimisa']);
      }
      return response()->json(['success' => FALSE, 'message' => 'Comanda eronata']);

      
    }
    
}