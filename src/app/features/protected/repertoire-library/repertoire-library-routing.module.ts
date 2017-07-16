import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepertoireLibraryComponent } from './repertoire-library.component';

const skillLibraryRoutes: Routes = [{
	path: '',
	component: RepertoireLibraryComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(skillLibraryRoutes)
	],
	exports: [
		RouterModule
	]
})
export class RepertoireLibraryRoutingModule { }
