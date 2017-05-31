import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const rootReducer = (reducers: Object = {}) =>
	composeReducers(
		defaultFormReducer(),
		combineReducers(Object.assign({
			router: routerReducer
		},
		reducers
	)));
