<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Repositories\CategoryInterface;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    protected $category;

	public function __construct (CategoryInterface $category) 
    {
        $this->category = $category;
    }

    public function store(CategoryRequest $request){

    	return $this->category->create($request->all());
    }
}
