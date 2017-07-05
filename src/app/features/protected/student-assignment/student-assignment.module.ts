import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StudentAssignmentDetailComponent } from './student-assignment.component';
import { StudentAssignmentDetailActions } from './student-assignment.actions';
import { studentAssignmentDetailReducer } from './student-assignment.reducer';

import { StudentAssignmentDetailRoutingModule } from './student-assignment-routing.module';
import { StudentAssignmentDetailService } from './student-assignment.service';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		StudentAssignmentDetailRoutingModule,
		OclModule
	],
	declarations: [
		StudentAssignmentDetailComponent,
	],
	providers: [StudentAssignmentDetailService]
})
export class StudentAssignmentDetailModule {
	static reducer = () => studentAssignmentDetailReducer;
}
