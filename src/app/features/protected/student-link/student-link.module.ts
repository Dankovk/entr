import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StudentLinkComponent } from './student-link.component';
import { StudentLinkActions } from './student-link.actions';
import { studentLinkReducer } from './student-link.reducer';

import { StudentLinkRoutingModule } from './student-link-routing.module';
import { StudentLinkService } from './student-link.service';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		StudentLinkRoutingModule,
		OclModule
	],
	declarations: [
		StudentLinkComponent,
	],
	providers: [StudentLinkService]
})
export class StudentLinkModule {
	static reducer = () => studentLinkReducer;
}
