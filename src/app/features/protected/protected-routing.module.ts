import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardModule } from './dashboard/dashboard.module';
import { StudentLinkModule } from './student-link/student-link.module';

const protectedRoutes: Routes = [
	{path: '', loadChildren: () => DashboardModule},
	{path: 'student-link', loadChildren: () => StudentLinkModule}
];

@NgModule({
	imports: [
		RouterModule.forChild(protectedRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ProtectedRoutingModule {}
