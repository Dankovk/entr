import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizPageComponent } from './quiz-page.component';

const skillLibraryRoutes: Routes = [{
	path: '',
	component: QuizPageComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(skillLibraryRoutes)
	],
	exports: [
		RouterModule
	]
})
export class QuizPageRoutingModule { }
