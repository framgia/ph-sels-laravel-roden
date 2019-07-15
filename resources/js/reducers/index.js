import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoryReducer from '../components/admin/reducer/categoryReducer';

export default combineReducers({
    authUser : authReducer,
    categories: categoryReducer
});