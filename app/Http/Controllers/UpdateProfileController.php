<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UpdateProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:sanctum']);
    }
    public function updateProfile(Request $request)
    {
        if ($request->fullName) {
            $update = ([
                'fullName' => $request->fullName,
            ]);
        } else if ($request->phoneNumber) {
            $update = ([
                'phoneNumber' => $request->phoneNumber,
            ]);
        } else if ($request->fullName && $request->phoneNumber) {
            $update = ([
                'phoneNumber' => $request->phoneNumber,
                'fullName' => $request->fullName,
            ]);
        }
        $user = User::where('id', auth()->user()->id)->update($update);
        return auth()->user();
    }
}