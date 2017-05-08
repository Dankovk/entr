import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecoverPasswordComponent } from './recoverpassword.component';
import { ChangePasswordComponent } from './changepassword.component';
import { NewPasswordComponent } from './newpassword.component';

import { RecoverPasswordRoutingModule } from './recoverpassword-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RecoverPasswordRoutingModule
	],
	declarations: [
		RecoverPasswordComponent,
		ChangePasswordComponent,
		NewPasswordComponent
	]
})
export class RecoverPasswordModule {}
