import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardModule } from './dashboard/dashboard.module';
import { StudentLinkModule } from './student-link/student-link.module';
import { SkillLibraryModule } from './skill-library/skill-library.module';

const protectedRoutes: Routes = [
	{path: 'student-link', loadChildren: () => DashboardModule},
	{path: '', loadChildren: () => SkillLibraryModule},
	{path: 'skill-library', loadChildren: () => StudentLinkModule}
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
