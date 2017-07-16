import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardModule } from './dashboard/dashboard.module';
import { StudentLinkModule } from './student-link/student-link.module';
import { SkillLibraryModule } from './skill-library/skill-library.module';
import { RepertoireLibraryModule } from './repertoire-library/repertoire-library.module';
import { RepertoirePageModule } from './repertoire-page/repertoire-page.module';
import { QuizPageModule } from './quiz-page/quiz-page.module';
import { StudentAssignmentDetailModule } from './student-assignment/student-assignment.module';
import { AccountPageModule } from './account-page/account-page.module';


const protectedRoutes: Routes = [
	{path: '', loadChildren: () => DashboardModule},
	{path: 'skill-library', loadChildren: () => SkillLibraryModule},
	{path: 'student-link', loadChildren: () => StudentLinkModule},
	{path: 'student-assignment', loadChildren: () => StudentAssignmentDetailModule},
	{path: 'repertoire-library', loadChildren: () => RepertoireLibraryModule},
	{path: 'repertoire-page', loadChildren: () => RepertoirePageModule},
	{path: 'quiz-page', loadChildren: () => QuizPageModule},
	{path: 'account-page', loadChildren: () => AccountPageModule}
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
