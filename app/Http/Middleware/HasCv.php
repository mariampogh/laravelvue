<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class HasCv
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
        if($request->user()->profession_id != 0) {
          return $next($request);
        } else {
          return response()->json('user doesnt have cv');
        }
    }
}
