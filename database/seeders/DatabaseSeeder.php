<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // seed user in database
        $createuser = User::create([
            'fullName' => 'Faruk Azeeza Salau',
            'email' => 'faruk@zeez.sal',
            'password' => Hash::make('wallet'),
            'phoneNumber' => '08123456789'
        ]);

        //create token for user
        $token = $createuser->createToken('myapptoken');
    }
}