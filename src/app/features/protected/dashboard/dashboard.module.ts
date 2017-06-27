import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardActions } from './dashboard.actions';
import { dashboardReducer } from './dashboard.reducer';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DashboardRoutingModule,
		OclModule
	],
	declarations: [
		DashboardComponent,
	],
	providers: [DashboardService]
})
export class DashboardModule {
	static reducer = () => dashboardReducer;
}
