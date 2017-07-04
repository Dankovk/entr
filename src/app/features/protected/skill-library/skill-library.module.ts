import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SkillLibraryComponent } from './skill-library.component';
import { SkillLibraryActions } from './skill-library.actions';
import { skillLibraryReducer } from './skill-library.reducer';

import { SkillLibraryRoutingModule } from './skill-library-routing.module';
import { SkillLibraryService } from './skill-library.service';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		SkillLibraryRoutingModule,
		OclModule
	],
	declarations: [
		SkillLibraryComponent,
	],
	providers: [SkillLibraryService]
})
export class SkillLibraryModule {
	static reducer = () => skillLibraryReducer;
}
