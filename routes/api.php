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

  Route::group(['namespace' => 'Admin'
  			   ,'prefix' => 'categories'] , function(){
	Route::post('/' , 'CategoryController@store');
	Route::post('/{id}' , 'CategoryController@update');
    Route::get('/' , 'CategoryController@all');
    Route::delete('/{id}' , 'CategoryController@remove');

    Route::post('/{id}/add-words' , 'WordController@store');
  });
});
