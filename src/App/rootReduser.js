import { combineReducers } from 'redux';
import { todoReduser } from "../TodoReduser";

export const rootReduser = combineReducers({
	todos : todoReduser

});