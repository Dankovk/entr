import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { composeReducers, provideReduxForms } from '@angular-redux/form';
import { Apollo } from 'apollo-angular';

import { Action, combineReducers, applyMiddleware } from 'redux';

// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import { IAppState } from './root.types';
import { rootReducer } from './root.reducer';
import { uiReducer } from './ui.reducer';

@NgModule({
	imports: [NgReduxModule, NgReduxRouterModule],
})
export class StoreModule {
	constructor(
		private store: NgRedux<IAppState>,
		devTools: DevToolsExtension,
		ngReduxRouter: NgReduxRouter,
		apolloClient: Apollo
	) {

		// Expects that ApolloClient has already been initialized
		const apollo = apolloClient.getClient();

		let enhancers = [
			applyMiddleware(apollo.middleware()),
		];

		if (devTools.isEnabled()) {
			enhancers.push(devTools.enhancer());
		}

		// Tell Redux about our reducers and epics. If the Redux DevTools
		// chrome extension is available in the browser, tell Redux about
		// it too.

		store.configureStore(
			rootReducer({
				apollo: apollo.reducer(),
				auth: (state = {}) => state,
				ui: uiReducer()
			}),
			{}, // Initial state
			[ createLogger() ],
			enhancers);

		// Enable syncing of Angular router state with our Redux store.
		ngReduxRouter.initialize();

		// Enable syncing of Angular form state with our Redux store.
		provideReduxForms(store);
	}
}
