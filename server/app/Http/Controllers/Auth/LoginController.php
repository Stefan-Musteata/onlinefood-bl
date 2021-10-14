<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;
use Carbon\Carbon;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

//use JWTAuth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;

class LoginController extends Controller
{
    //User login 
    public function userLogin(Request $request){
      $credentials = request(['email', 'password']);
      if (! $token = auth()->attempt($credentials)) {
        return response()->json(['error' => 'Datele nu sunt corecte!'], 401);
      }
      return $this->createNewToken($token);
    }

    //After validation credentials will create token
    protected function createNewToken($token){
      return response()->json([
          'token' => $token
      ]);
    }
}