import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountComponent } from './account.component';

import { AccountRoutingModule } from './account-routing.module';
import { AccountService } from './account.service';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AccountRoutingModule,
		OclModule
	],
	declarations: [
		AccountComponent,
	],
	providers: [AccountService]
})

export class AccountModule {
	// static reducer = () => skillLibraryReducer;
}
