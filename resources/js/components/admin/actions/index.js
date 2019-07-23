import _ from 'lodash';

export const addCategory = payload => async dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/categories', payload)
      .then(response => {
        dispatch({ type: 'CATEGORY_PUSH', payload: response.data.payload });
        resolve();
      })
      .catch(err => {
        reject(err.response.data.errors);
      });
  });
};

export const getCategories = page => async dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .get('/api/categories?page=' + page)
      .then(response => {
        dispatch({ type: 'CATEGORY_STORE', payload: response.data.payload });
        resolve();
      })
      .catch(err => {
        reject(err.response.data.errors);
      });
  });
};

export const removeCategory = (id , idx) => async dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .delete('/api/categories/'+id)
      .then(response=>{
        dispatch({type : 'CATEGORY_REMOVE' , payload:idx})
        resolve();
      })
      .catch(err => {
        reject(err.response)
      })
  });
};


export const updateCategory = (payload, id) => async dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/categories/'+id , payload)
      .then(response=>{
        dispatch({type : 'CATEGORY_UPDATE' , payload:response.data.payload})
        resolve();
      })
      .catch(err => {
        reject(err.response.data.errors)
      })
  });
};