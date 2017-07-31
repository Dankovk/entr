import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardModule } from './dashboard/dashboard.module';
import { StudentLinkModule } from './student-link/student-link.module';
import { SkillLibraryModule } from './skill-library/skill-library.module';
import { RepertoireLibraryModule } from './repertoire-library/repertoire-library.module';
import {RepertoireModuleModule} from './repertoire-module/repertoire-module.module';
import { QuizModule } from './quiz/quiz.module';
import { StudentAssignmentDetailModule } from './student-assignment/student-assignment.module';
import { AccountModule } from './account/account.module';
import { DrawerPageModule } from './drawer-page/drawer-page.module';


const protectedRoutes: Routes = [
	{path: '', loadChildren: () => DashboardModule},
	{path: 'skill-library', loadChildren: () => SkillLibraryModule},
	{path: 'student-link', loadChildren: () => StudentLinkModule},
	{path: 'student-assignment', loadChildren: () => StudentAssignmentDetailModule},
	{path: 'repertoire-library', loadChildren: () => RepertoireLibraryModule},
	{path: 'repertoire-module', loadChildren: () => RepertoireModuleModule},
	{path: 'quiz', loadChildren: () => QuizModule},
	{path: 'account', loadChildren: () => AccountModule},
	{path: 'drawer-page', loadChildren: () => DrawerPageModule}
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
