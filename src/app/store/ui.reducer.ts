import { combineReducers } from 'redux';
import { ProtectedReducerModule } from '../features/protected/protected-reducer.module';

// Define the global store shape by combining our application's
// reducers together into a given structure.
export const uiReducer = () => {
	return combineReducers(
		Object.assign(
			// {}, // add more reducers here
			ProtectedReducerModule.reducers()
		)
	);
};
