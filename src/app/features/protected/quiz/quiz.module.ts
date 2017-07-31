import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { QuizComponent } from './quiz.component';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizService } from './quiz.service';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		QuizRoutingModule,
		OclModule
	],
	declarations: [
		QuizComponent,
	],
	providers: [QuizService]
})

export class QuizModule {
	// static reducer = () => skillLibraryReducer;
}
