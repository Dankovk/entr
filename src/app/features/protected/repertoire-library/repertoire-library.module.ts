import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RepertoireLibraryComponent } from './repertoire-library.component';

import { RepertoireLibraryRoutingModule } from './repertoire-library-routing.module';
import { RepertoireLibraryService } from './repertoire-library.service';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RepertoireLibraryRoutingModule,
		OclModule
	],
	declarations: [
		RepertoireLibraryComponent,
	],
	providers: [RepertoireLibraryService]
})

export class RepertoireLibraryModule {
	// static reducer = () => skillLibraryReducer;
}
