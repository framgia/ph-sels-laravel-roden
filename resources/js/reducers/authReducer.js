export default (state = {}, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      localStorage.setItem('access_token', action.payload.token);
      window.axios.defaults.headers.common['Authorization'] =
        'Bearer ' + localStorage.getItem('access_token');

      return { ...state, user: action.payload, isAuthenticated: true };

    case 'AUTH_LOGOUT':
      localStorage.removeItem('access_token');
      return { ...state ,isAuthenticated: false };

    case 'AUTH_CHECK':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!localStorage.getItem('access_token')
      };

    case 'AUTH_FAILED':
      state = Object.assign({}, state, {
        errMsg: action.data.errorMsg
      });
      return state;

    default:
      return state;
  }
};