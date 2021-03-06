import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin.component';

import { SigninRoutingModule } from './signin-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		SigninRoutingModule
	],
	declarations: [
		SigninComponent
	]
})
export class SigninModule {}
