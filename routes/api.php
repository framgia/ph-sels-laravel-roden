<?php

use Illuminate\Http\Request;

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

Route::post('/register' , 'PassportController@register');
Route::post('/login' , 'PassportController@login');

Route::group(['middleware' => 'auth:api'], function() {
	Route::post('/logout', 'PassportController@logout');
	Route::get('/check-token', function(){return response()->json(['user' => auth()->user()]);});

	Route::group(['namespace' => 'Admin'] , function(){
		Route::post('/add-category' , 'CategoryController@store');
		Route::post('/categories/{id}' , 'CategoryController@update');
		Route::get('/categories' , 'CategoryController@all');
		Route::delete('/categories/{id}' , 'CategoryController@remove');
	});
});
