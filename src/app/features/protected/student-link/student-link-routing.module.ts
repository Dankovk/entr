import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentLinkComponent } from './student-link.component';

const studentLinkRoutes: Routes = [{
	path: '',
	component: StudentLinkComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(studentLinkRoutes)
	],
	exports: [
		RouterModule
	]
})
export class StudentLinkRoutingModule { }
