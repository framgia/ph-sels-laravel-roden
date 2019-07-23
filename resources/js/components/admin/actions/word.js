export const addWords = (payload, id) => async dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/categories/add-words/'+id , payload)
      .then(response=>{
        // dispatch({type : 'CATEGORY_UPDATE' , payload:response.data.payload})
        resolve();
      })
      .catch(err => {
        reject(err.response.data.errors)
      })
  });
};