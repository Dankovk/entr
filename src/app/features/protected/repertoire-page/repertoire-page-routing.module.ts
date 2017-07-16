import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepertoirePageComponent } from './repertoire-page.component';

const skillLibraryRoutes: Routes = [{
	path: '',
	component: RepertoirePageComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(skillLibraryRoutes)
	],
	exports: [
		RouterModule
	]
})
export class RepertoirePageRoutingModule { }
