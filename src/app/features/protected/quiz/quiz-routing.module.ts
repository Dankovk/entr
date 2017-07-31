import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizComponent } from './quiz.component';

const skillLibraryRoutes: Routes = [{
	path: '',
	component: QuizComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(skillLibraryRoutes)
	],
	exports: [
		RouterModule
	]
})
export class QuizRoutingModule { }
