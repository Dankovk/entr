import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DrawerPageComponent } from './drawer-page.component';

const drawerPageRoutes: Routes = [{
	path: '',
	component: DrawerPageComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(drawerPageRoutes)
	],
	exports: [
		RouterModule
	]
})
export class DrawerPageRoutingModule { }
