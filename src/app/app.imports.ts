import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { ApolloModule } from 'apollo-angular';

import { getApolloClient } from './graphql/client';

// This app's ngModules
import { StoreModule } from './store/store.module';

import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';

import { routes } from './app.routing';

export const APP_IMPORTS = [
	BrowserAnimationsModule,
	ReactiveFormsModule,
	RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules }),
	ApolloModule.forRoot(getApolloClient),
	StoreModule,
	NgReduxModule,
	NgReduxRouterModule,
	TransferHttpModule
];
