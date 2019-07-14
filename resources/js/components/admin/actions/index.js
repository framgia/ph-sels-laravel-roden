import _ from 'lodash';

export const addCategory = payload => async dispatch => {
	return new Promise((resolve, reject) => {
		axios
			.post("/api/add-category", payload)
			.then(response => {
				dispatch({ type: "CATEGORY_ADD", payload: response.data });
				setTimeout(function() {
					resolve();
				}, 5000);
			})
			.catch(err => {
				reject(err.response.data.errors);
			});
	});
};