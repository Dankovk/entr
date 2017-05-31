import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedReducerModule } from './protected-reducer.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ProtectedRoutingModule,
		ProtectedReducerModule
	]
})
export class ProtectedModule {}
