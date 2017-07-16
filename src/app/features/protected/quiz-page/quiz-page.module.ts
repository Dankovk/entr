import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { QuizPageComponent } from './quiz-page.component';

import { QuizPageRoutingModule } from './quiz-page-routing.module';
import { QuizPageService } from './quiz-page.service';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		QuizPageRoutingModule,
		OclModule
	],
	declarations: [
		QuizPageComponent,
	],
	providers: [QuizPageService]
})

export class QuizPageModule {
	// static reducer = () => skillLibraryReducer;
}
