import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountPageComponent } from './account-page.component';

const skillLibraryRoutes: Routes = [{
	path: '',
	component: AccountPageComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(skillLibraryRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AccountPageRoutingModule { }
