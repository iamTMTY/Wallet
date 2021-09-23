<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\UpdateProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// register new user
Route::post('/register', [RegisterController::class, 'store']);

// login user
Route::post('/login', [LoginController::class, 'login']);

// log out
Route::post('/logout', [LogoutController::class, 'logout']);

// send reset password link
Route::post('/request-resetpassword', [PasswordResetController::class, 'sendResetLink']);

Route::post('/{token}/resetpassword', [PasswordResetController::class, 'resetPassword']);

// update user profile
Route::patch('/update', [UpdateProfileController::class, 'updateProfile']);