<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    //
    public function store(Request $request)
    {
        // validate input
        $request->validate([
            'fullname' => 'required',
            'email' => 'required | email',
            'password' => 'required',
            'phoneNumber' => 'required',
        ]);

        // create user in database
        $createuser = User::create([
            'fullName' => $request->firstName,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phoneNumber' => $request->number
        ]);

        //create token for user
        $token = $createuser->createToken('myapptoken')->plainTextToken;
        $response = [
            'successCode' => 1,
            'token' => $token
        ];
        return response($response, 201);
    }
}