<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InitializeController;

Route::get('/{url}', InitializeController::class)->where('url', '^(?!api).*$');
