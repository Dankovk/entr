import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';

// This app's ngModules
import { StoreModule } from './store/store.module';
import { RecoverPasswordModule } from './features/recoverpassword/recoverpassword.module';

import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';

import { routes } from './app.routing';

export const APP_IMPORTS = [
	BrowserAnimationsModule,
	ReactiveFormsModule,
	RouterModule.forRoot(routes, { useHash: false, preloadingStrategy: PreloadAllModules }),
	NgReduxModule,
	NgReduxRouterModule,
	StoreModule,
	RecoverPasswordModule,
	TransferHttpModule
];
