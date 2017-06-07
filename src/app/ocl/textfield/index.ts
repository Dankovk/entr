import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
	OclTextfield,
	OclTextfieldDirective,
} from './textfield.component';

export * from './textfield.component';

@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclTextfield,
		OclTextfieldDirective
	],
	declarations: [
		OclTextfield,
		OclTextfieldDirective
	],
})
export class OclTextfieldModule {}