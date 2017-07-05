import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentAssignmentDetailComponent } from './student-assignment.component';

const studentAssignmentDetailRoutes: Routes = [{
	path: '',
	component: StudentAssignmentDetailComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(studentAssignmentDetailRoutes)
	],
	exports: [
		RouterModule
	]
})
export class StudentAssignmentDetailRoutingModule { }
