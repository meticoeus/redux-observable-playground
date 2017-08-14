import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './reducer_user';
export const rootReducer = combineReducers({
    users: users,
    routing: routerReducer
});