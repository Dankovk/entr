import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DrawerPageComponent } from './drawer-page.component';

import { DrawerPageRoutingModule } from './drawer-page-routing.module';
import {OclModule} from "../../../ocl/ocl.module";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DrawerPageRoutingModule,
		OclModule
	],
	declarations: [
		DrawerPageComponent,
	],
})

export class DrawerPageModule {
	// static reducer = () => skillLibraryReducer;
}
