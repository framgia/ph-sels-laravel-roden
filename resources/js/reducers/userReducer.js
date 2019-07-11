export default (state = {}, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN':
      console.log(action);
      localStorage.setItem('access_token', action.payload.token);
      return { ...state, action, isAuthenticated: true };
    case 'AUTH_LOGOUT':
      localStorage.removeItem('access_token');
      return { ...state, isAuthenticated: false };
    case 'AUTH_CHECK':
      state = Object.assign({}, state, {
        isAuthenticated: !!localStorage.getItem('access_token')
      });
      return state;
    case 'AUTH_FAILED':
      state = Object.assign({}, state, {
        errMsg: action.data.errorMsg
      });
      return state;

    default:
      return state;
  }
};