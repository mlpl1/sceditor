<?php

namespace App\Http\Controllers;

use App;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function setLocale(Request $request, string $locale): RedirectResponse
    {
        session(['locale' => $locale]);
        return back(303);
    }
}
