/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SigninComponent } from './features/signin/signin.component';
import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [
	{ path: '', component: DashboardComponent, pathMatch: 'full' },
	{ path: 'signin', component: SigninComponent, pathMatch: 'full' },
	{
		path: 'changepassword',
		loadChildren: './features/recoverpassword/recoverpassword.module#RecoverPasswordModule'
	},
	{ path: '**', component: NotFound404Component }
];
