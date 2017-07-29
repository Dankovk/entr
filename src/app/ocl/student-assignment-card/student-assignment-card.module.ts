import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclStudentAssignmentCard} from "./student-assignment-card.component";
import {OclAssignmentItemModule} from "../assignment-item/assignment-item.module";


export * from './student-assignment-card.component';

@NgModule({
	imports: [
		CommonModule,
		OclAssignmentItemModule
	],
	exports: [
		OclStudentAssignmentCard
	],
	declarations: [
		OclStudentAssignmentCard
	],
})
export class OclStudentAssignmentCardModule {
}
