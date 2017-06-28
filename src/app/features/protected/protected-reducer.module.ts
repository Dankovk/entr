import { NgModule } from '@angular/core';

import { DashboardModule } from './dashboard/dashboard.module';
import { StudentLinkModule } from './student-link/student-link.module';

const uiReducers: Object = {
	dashboard: DashboardModule.reducer(),
	studentLink: StudentLinkModule.reducer()
};

@NgModule()
export class ProtectedReducerModule {
	static reducers = () => uiReducers;
}
