import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecoverPasswordComponent } from './recoverpassword.component';
import { ChangePasswordComponent } from './changepassword.component';
import { NewPasswordComponent } from './newpassword.component';

const recoverPasswordRoutes: Routes = [{
	path: 'changepassword',
	component: RecoverPasswordComponent,
	children: [{
		path: '',
		component: ChangePasswordComponent,
		pathMatch: 'full'
	},
	{
		path: 'new',
		component: NewPasswordComponent,
		pathMatch: 'full'
	}]
}];

@NgModule({
	imports: [
		RouterModule.forChild(recoverPasswordRoutes)
	],
	exports: [
		RouterModule
	]
})
export class RecoverPasswordRoutingModule { }
