import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RepertoireModuleComponent } from './repertoire-module.component';

import { RepertoireModuleRoutingModule } from './repertoire-module-routing.module';
import { RepertoireModuleService } from './repertoire-module.service';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RepertoireModuleRoutingModule,
		OclModule
	],
	declarations: [
		RepertoireModuleComponent,
	],
	providers: [RepertoireModuleService]
})

export class RepertoireModuleModule {
	// static reducer = () => skillLibraryReducer;
}
