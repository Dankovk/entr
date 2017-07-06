import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardModule } from './dashboard/dashboard.module';
import { StudentLinkModule } from './student-link/student-link.module';
import { SkillLibraryModule } from './skill-library/skill-library.module';
import { StudentAssignmentDetailModule } from "./student-assignment/student-assignment.module";

const protectedRoutes: Routes = [
	{path: '', loadChildren: () => DashboardModule},
	{path: 'skill-library', loadChildren: () => SkillLibraryModule},
	{path: 'student-link', loadChildren: () => StudentLinkModule},
	{path: 'student-assignment', loadChildren: () => StudentAssignmentDetailModule}
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
