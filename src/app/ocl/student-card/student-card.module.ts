import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclStudentCard} from "./student-card.component";
import { OclAssignmentActivityModule } from "../assignment-activity/assignment-activity.module";


export * from './student-card.component';

@NgModule({
	imports: [
		CommonModule,
		OclAssignmentActivityModule
	],
	exports: [
		OclStudentCard
	],
	declarations: [
		OclStudentCard
	],
})
export class OclStudentCardModule {}
