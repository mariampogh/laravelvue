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
Route::middleware('auth:api')->group(function () {

    Route::get('/user', function (Request $request) {
        return $request->user();
    });


   	Route::group(['namespace' => "AuthUser"], function(){
        Route::post('/logout', 'AuthController@logout');
	});

    Route::group(['namespace' => "User", 'prefix' => '/user'], function(){
        Route::post('/update', 'UserController@updateUser');
        Route::post('/updateCv', 'UserController@updateCv');
        Route::get('/professions', 'CvController@professions');
        Route::get('/questions/{id}', 'CvController@profQuestions');
        Route::apiResource('/users', 'UserController');
    });

    Route::middleware('admin')->group(function () {
        //get user role
        Route::get('/getUserRole', function (Request $request) {
              return response()->json('admin');
        });
        
        //admin UserController routes
        Route::post('/admin/users/updateUser', 'Admin\UserController@updateUser');
        Route::apiResource('/admin/users', 'Admin\UserController', ['as' => 'admin'])->except(['update']);
       
    });
});

Route::group(['namespace' => "AuthUser"], function(){
    //login and register
	Route::post('/login', 'AuthController@login');

	Route::post('/register', 'AuthController@register');
});




