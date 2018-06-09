<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegisterTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->json('post', 'rest-api/register', [
            "name" => "Camilo",
            "email" => "camilomanriquec@gmail.com",
            "password" => "c31353135",
            "password_confirmation" => "c31353135"
        ]);

        dd($response);

    }
}
