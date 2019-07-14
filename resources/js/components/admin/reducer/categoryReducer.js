export default (state = {}, action) => {
  switch (action.type) {
    case 'CATEGORY_PUSH':
      return {
        ...state,
        categories: [...state.categories, action.payload],
        isAuthenticated: true
      };

    case 'CATEGORY_REMOVE':

    case 'CATEGORY_UPDATE':

    default:
      return state;
  }
};
