import { NgModule } from '@angular/core';

import { DashboardModule } from './dashboard/dashboard.module';

const uiReducers: Object = {
	dashboard: DashboardModule.reducer()
};

@NgModule()
export class ProtectedReducerModule {
	static reducers = () => uiReducers;
}
