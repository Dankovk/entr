import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclAssignmentActivity} from "./assignment-activity.component";

export * from './assignment-activity.component';

@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclAssignmentActivity
	],
	declarations: [
		OclAssignmentActivity
	],
})
export class OclAssignmentActivityModule {}
