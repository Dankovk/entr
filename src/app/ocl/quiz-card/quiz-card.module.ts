import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclStudentCard} from "./student-card.component";

export * from './student-card.component';

@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclStudentCard
	],
	declarations: [
		OclStudentCard
	],
})
export class OclStudentCardModule {}