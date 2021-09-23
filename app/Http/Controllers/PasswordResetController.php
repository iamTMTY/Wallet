<?php

namespace App\Http\Controllers;

use App\Models\PasswordReset;
use App\Models\User;
use App\Mail\resetPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;


class PasswordResetController extends Controller
{
    public function sendResetLink(Request $request)
    {
        // validate input
        $request->validate([
            'email' => 'required | email ',
        ]);
        $user = User::where('email', $request->email)->first();

        // check if user exists
        if ($user) {
            $token = Str::random(70);
            PasswordReset::create([
                'user_id' => $user->id,
                'token' => $token,
            ]);
            //send reset link to mail
            // Mail::to(Request('email'))->send(new resetPassword($user));
            return response(['token' => $token]);
        } else {
            // if email wasnt found in the db
            return response('Email doesnt exist');
        }
    }


    // // Tokens referred to here are passwordReset tokens
    // public function resetPassword($token, Request $request)
    // {
    //     $user = PasswordReset::where('token', $token)->first();
    //     return response(['token' => $token]);
    //     // token(passwordRest token) should be passed in to the address 
    // }
    public function finalReset(Request $request)
    {
        // change password
        $request->validate([
            'password' => 'required | confirmed',
            'token' => 'required'  // from FE
        ]);
        // retrieve user details
        $user = PasswordReset::where('token', $request->token)->first();

        // check if user with the token exist
        if ($user) {
            User::where('id', $user->user_id)->update([
                'password' => Hash::make($request->password),
            ]);
            return response('success');
        } else return response(null, 409);
    }
}