import { DashboardAction, DashboardActions } from './dashboard.actions';
// import { IAnimalList, IAnimal, AnimalType } from '../model';
// import { indexBy, prop } from 'ramda';

const INITIAL_STATE: Object = {};

export const dashboardReducer = (state: Object = INITIAL_STATE,
	action: DashboardAction): Object => {

	// if (!action.meta || action.meta.animalType !== animalType) {
	// 	return state;
	// }

	// switch (action.type) {
	// 	case AnimalAPIActions.LOAD_STARTED:
	// 		return {
	// 			...state,
	// 			items: {},
	// 			loading: true,
	// 			error: null,
	// 		};
	// 	case AnimalAPIActions.LOAD_SUCCEEDED:
	// 		return {
	// 			...state,
	// 			items: indexBy(prop('id'), action.payload),
	// 			loading: false,
	// 			error: null,
	// 		};
	// 	case AnimalAPIActions.LOAD_FAILED:
	// 		return {
	// 			...state,
	// 			items: {},
	// 			loading: false,
	// 			error: action.error,
	// 		};
	// }

	return state;
};
