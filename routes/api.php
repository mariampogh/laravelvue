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
    //get logged in user 
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    //logout
   	Route::group(['namespace' => "AuthUser"], function(){
        Route::post('/logout', 'AuthController@logout');
	});

    // UserCOntroller routes
    Route::group(['namespace' => "User"], function(){
        Route::post('/updateUser', 'UserController@updateUser');
        Route::post('/updateCv', 'UserController@updateCv');
        Route::get('/professions', 'UserController@getProfessions');
        Route::get('/questions/{id}', 'UserController@getQuestions');
    });

    //admin UserController routes
    Route::apiResource('/users', 'User\UserController');

    Route::middleware('admin')->group(function () {
        //get user role
        Route::get('/getUserRole', function (Request $request) {
              return response()->json('admin');
        });

        //admin UserController routes
        Route::apiResource('/admin/users', 'Admin\UserController', ['as' => 'admin'])->except(['update']);
        Route::post('/admin/users/updateUser', 'Admin\UserController@updateUser');
    });
});

Route::group(['namespace' => "AuthUser"], function(){
    //login and register
	Route::post('/login', 'AuthController@login');

	Route::post('/register', 'AuthController@register');
});




