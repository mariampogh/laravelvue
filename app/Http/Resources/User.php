<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'admin' => $this->isAdmin,
            'name' => $this->name, 
            'email' => $this->email, 
            'prof_id' => $this->profession_id, 
            'address' => $this->address, 
            'phone' => $this->phone, 
        ];
    }
}
