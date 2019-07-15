export default (state = {}, action) => {
  switch (action.type) {
    case 'CATEGORY_PUSH':
      var array = [...state.data];

      if(array.length <= 10){
        array.push(action.payload);
  
        return {...state.categories, data: array };
      }else{
        return state;
      }

    case 'CATEGORY_REMOVE':
      var array = [...state.data];
      array.splice(action.payload, 1);
  
      return {...state.categories, data: array };

    case 'CATEGORY_STORE':
      return action.payload;

    case 'CATEGORY_UPDATE':

      var array = [...state.data];
      var objIndex = array.findIndex((obj => obj.id == action.payload.id));
      array[objIndex] = action.payload;
      return {...state.categories, data: array };

    default:
      return state;
  }
};