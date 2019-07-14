<?php 

namespace App\Repositories;

interface BaseInterface
{

	/**
	 * Get number of records.
	 *
	 * @return array
	*/
	public function getCount();

	/**
	 * Destroy a model.
	 *
	 * @param  int $id
	 * @return void
	 */
	public function destroy($id);

	/**
	 * Get Model by id.
	 *
	 * @param  int  $id
	 * @return App\Models\Model
	 */
	public function getById($id);

	/**
	 * Get Model collection.
	 *
	 * @return App\Models\Model
	 */
	public function getAll();

	 /**
	 * // Eager load database relationships
	 *
	 * @param  array  $relationships
	 * @return App\Models\Model
	 */
	public function with($relationships);

	/**
	 * Find Model collection with relationship.
	 *
	 * @param  string  $column , $data
	 * @return App\Models\Model
	 */
	public function findBy($column , $data);

	/**
	 * Insert data to database
	 *
	 * @param  array $request
	 * @return App\Models\Model
	 */
	public function create($request);

	/**
	 * Get Model collection wth pagination
	 *
	 * @return App\Models\Model
	 */
	public function paginate($number);


}