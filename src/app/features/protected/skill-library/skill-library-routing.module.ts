import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillLibraryComponent } from './skill-library.component';

const skillLibraryRoutes: Routes = [{
	path: '',
	component: SkillLibraryComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(skillLibraryRoutes)
	],
	exports: [
		RouterModule
	]
})
export class SkillLibraryRoutingModule { }
