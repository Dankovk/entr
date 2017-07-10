import { NgModule } from '@angular/core';

import { DashboardModule } from './dashboard/dashboard.module';
import { StudentLinkModule } from './student-link/student-link.module';
import { SkillLibraryModule } from './skill-library/skill-library.module';
import { StudentAssignmentDetailModule } from './student-assignment/student-assignment.module';

const uiReducers: Object = {
	dashboard: DashboardModule.reducer(),
	studentLink: StudentLinkModule.reducer(),
	skillLibrary: SkillLibraryModule.reducer(),
	studentAssignmentDetail: StudentAssignmentDetailModule.reducer()
};

@NgModule()
export class ProtectedReducerModule {
	static reducers = () => uiReducers;
}
