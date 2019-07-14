<?php 

namespace App\Repositories\Eloquent;

use App\Repositories\BaseInterface;

abstract class BaseRepository implements BaseInterface{

	/**
	 * The Model instance.
	 *
	 * @var Illuminate\Database\Eloquent\Model
	 */
	protected $model;

	/**
	 * Get number of records.
	 *
	 * @return array
	 */
	public function getCount()
	{
		$total = $this->model->count();

		return compact('total');
	}

	/**
	 * Destroy a model.
	 *
	 * @param  int $id
	 * @return void
	 */
	public function destroy($id)
	{
		$this->getById($id)->delete();
	}

	/**
	 * Get Model by id.
	 *
	 * @param  int  $id
	 * @return App\Models\Model
	 */
	public function getById($id)
	{
		return $this->model->findOrFail($id);
	}

	/**
	 * Get Model collection.
	 *
	 * @return App\Models\Model
	 */
	public function getAll()
	{
		return $this->model->all();
	}

	/**
	 * Get Model collection.
	 *
	 * @return App\Models\Model
	 */
	public function paginate($number)
	{
		return $this->model->paginate($number);
	}

	 /**
	 * // Eager load database relationships
	 *
	 * @param  int  $relationships
	 * @return App\Models\Model
	 */
	public function with($relationships){

		return $this->model->with($relationships);
	}

	/**
	 * Find Model collection with relationship.
	 *
	 * @param  string  $column , $data
	 * @return App\Models\Model
	 */
	public function findBy($column , $data){

		return $this->model->where($column , $data)->first();
	}

	/**
	 * Insert data to database
	 *
	 * @param  array $request
	 * @return App\Models\Model
	 */
	public function create($request){

		return response()->json(['data' => $this->model->create($request)] , 200);
	}
}
