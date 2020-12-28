import { combineReducers } from 'redux';
import postReducers from './postReducers';
import userReducer from './userReducers';

export default combineReducers({

    posts: postReducers,
    users: userReducer

});