<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required | email',
            'password' => 'required'
        ]);
        $checkLogin = ($request->only('email', 'password'));

        if (!Auth::attempt($checkLogin)) {
            return response('Bad Creds');
        } else
            $user = User::where('email', Request('email'))->first();

        // get token for authenticated user and return 
        $token = $user->createToken('myapptoken')->plainTextToken;
        return response($token);
    }
}