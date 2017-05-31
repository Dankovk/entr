import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecoverPasswordComponent } from './recoverpassword.component';
import { ChangePasswordComponent } from './changepassword.component';
import { NewPasswordComponent } from './newpassword.component';

const recoverPasswordRoutes: Routes = [{
	path: '',
	component: RecoverPasswordComponent,
	children: [
		{ path: '',
			component: ChangePasswordComponent
		},
		{ path: 'new', pathMatch: 'full',
			component: NewPasswordComponent
		}
	]
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
