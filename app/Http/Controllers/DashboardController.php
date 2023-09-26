<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function __construct()
    {
        if (Auth::check()) {
            $this->middleware([
                'auth:sanctum',
                config('jetstream.auth_session'),
                'verified',
            ]);
        }
    }

    /**
     * Show the index page.
     */
    public function index(Request $request): \Inertia\Response
    {
        return inertia('Dashboard', ['m' => $this->getMiddleware()]);
    }
}
