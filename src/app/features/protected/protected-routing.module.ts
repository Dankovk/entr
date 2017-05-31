import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardModule } from './dashboard/dashboard.module';

const protectedRoutes: Routes = [{
	path: '',
	loadChildren: () => DashboardModule
}];

@NgModule({
	imports: [
		RouterModule.forChild(protectedRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ProtectedRoutingModule {}
