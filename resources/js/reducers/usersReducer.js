export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_PUSH':
     
      return { ...state, user: action.payload, isAuthenticated: true };

    case 'USER_REMOVE':
      

    case 'USER_UPDATE':
      

    default:
      return state;
  }
};