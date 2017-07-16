import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclQuizCard} from "./quiz-card.component";

export * from './quiz-card.component';

@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclQuizCard
	],
	declarations: [
		OclQuizCard
	],
})
export class OclQuizCardModule {}