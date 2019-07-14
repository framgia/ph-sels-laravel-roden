<?php

namespace App\Repositories\Eloquent;

use App\Models\Category;
use App\Repositories\CategoryInterface;
use App\Repositories\Eloquent\BaseRepository;

class CategoryRepository extends BaseRepository implements CategoryInterface{

    /**
     * Create a new CategoryRepository instance.
     *
     * @param  App\Models\Category $Category
     * @return void
     */
    public function __construct (Category $category) 
    {
        $this->model = $category;
    }
}





