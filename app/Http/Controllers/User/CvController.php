<?php

namespace App\Http\Controllers\User;

use App\Cv;
use App\Question;
use App\Profession;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CvController extends Controller
{
	//create user cv
	public function createCv(Request $request, $id)
	{
		$id = auth()->user()->id;

		$questionsCount = Question::where('profession_id', $id)->count();
		
		if($questionsCount != count($request->all())) {
			return response()->json("Please fill all fields", 400);
		} else {
			$cv = new Cv;
		}
	}

	//get questions of the profession
	public function profQuestions($id)
	{
		$response = Profession::with('questions')->findOrFail($id);

		return response()->json($response, 200);
	}

	//get all professions
    public function professions()
    {
        $response = Profession::get(); 

        return response()->json($response, 200);
    }

}
