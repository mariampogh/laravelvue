<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = [
        'profession_id', 'question_id'
    ];

    public function profession()
    {
        return $this->belongsTo('App\Profession');
    }
}
