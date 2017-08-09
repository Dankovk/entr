import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclInputDirective, OclErrorDirective, OclTextfield} from "./textfield.component";


@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclInputDirective,
		OclErrorDirective,
		OclTextfield
	],
	declarations: [
		OclInputDirective,
		OclErrorDirective,
		OclTextfield
	],
})
export class OclTextfieldModule {
}

export * from './textfield.component';
