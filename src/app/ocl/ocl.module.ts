import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OclButtonModule } from './button/index';


@NgModule({
	imports: [ CommonModule, OclButtonModule ],
	// declarations: [ AwesomePipe, HighlightDirective ],
	exports: [ /* AwesomePipe, HighlightDirective, */
	          CommonModule, FormsModule, OclButtonModule ]
})
export class OclModule { }
