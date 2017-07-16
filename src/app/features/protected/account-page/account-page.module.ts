import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountPageComponent } from './account-page.component';

import { AccountPageRoutingModule } from './account-page-routing.module';
import { AccountPageService } from './account-page.service';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AccountPageRoutingModule,
		OclModule
	],
	declarations: [
		AccountPageComponent,
	],
	providers: [AccountPageService]
})

export class AccountPageModule {
	// static reducer = () => skillLibraryReducer;
}
