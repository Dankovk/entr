import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {OclModule} from "../../ocl/ocl.module";


import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedReducerModule } from './protected-reducer.module';

import { ProtectedComponent } from './protected.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ProtectedRoutingModule,
		ProtectedReducerModule,
		OclModule
	],
	declarations: [
		ProtectedComponent
	]
})
export class ProtectedModule {}
