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

    public function all(){
      return $this->category->paginate(10);
    }

    public function remove($id){
      return $this->category->destroy($id); 
    }


    public function update(CategoryRequest $request , $id){
      return $this->category->update($request , $id);
    }
}
