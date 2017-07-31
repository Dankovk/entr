import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepertoireModuleComponent } from './repertoire-module.component';

const skillLibraryRoutes: Routes = [{
	path: '',
	component: RepertoireModuleComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(skillLibraryRoutes)
	],
	exports: [
		RouterModule
	]
})
export class RepertoireModuleRoutingModule { }
