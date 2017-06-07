import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OclButtonModule } from './button/index';
import { OclTextfieldModule } from './textfield/index';


@NgModule({
	imports: [ CommonModule, OclButtonModule, OclTextfieldModule ],
	// declarations: [ AwesomePipe, HighlightDirective ],
	exports: [ /* AwesomePipe, HighlightDirective, */
	          CommonModule, FormsModule, OclButtonModule, OclTextfieldModule ]
})
export class OclModule { }
