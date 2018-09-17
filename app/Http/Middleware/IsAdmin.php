<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;


class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if($request->user()->isAdmin) {
            return $next($request);
        } else if($request->user()->profession_id == 0) {
            return response()->json('user.professions');
        } else {
            return response()->json('user');
        }
    }
     
}   
