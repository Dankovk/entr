import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RepertoirePageComponent } from './repertoire-page.component';

import { RepertoirePageRoutingModule } from './repertoire-page-routing.module';
import { RepertoirePageService } from './repertoire-page.service';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RepertoirePageRoutingModule,
		OclModule
	],
	declarations: [
		RepertoirePageComponent,
	],
	providers: [RepertoirePageService]
})

export class RepertoirePageModule {
	// static reducer = () => skillLibraryReducer;
}
