import _ from 'lodash';

/*
 Register User
*/
export const registerUser = payload => async dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/register', payload)
      .then(response => {
        dispatch({ type: 'AUTH_LOGIN', payload: response.data });

        setTimeout(function() {
          resolve();
        }, 5000);
      })
      .catch(err => {
        reject(err.response.data.errorMsg);
      });
  });
};

/*
 Authenticate User
*/
export const checkAuth = () => async dispatch => {
  axios
    .get('/api/check-token')
    .then(response => {
      dispatch({ type: 'AUTH_CHECK' });
    })
    .catch(err => {
      dispatch({ type: 'AUTH_LOGOUT' });
      dispatch({ type: 'AUTH_CHECK' });
    });
};

/*
 Login User
*/
export const loginUser = payload => async dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .post('/api/login', payload)
      .then(response => {
        dispatch({ type: 'AUTH_LOGIN', payload: response.data });

        setTimeout(function() {
          resolve();
        }, 5000);
      })
      .catch(err => {
        reject(err.response.data.errorMsg);
      });
  });
};

export const authLogout = () => async dispatch => {
  axios.post('/api/logout').then(response => {
    dispatch({ type: 'AUTH_LOGOUT' });

    this.props.history.push('/login');
  });
};
