import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclLabelDirective, OclInputDirective, OclErrorDirective, OclTextfield} from "./textfield.component";


@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclLabelDirective,
		OclInputDirective,
		OclErrorDirective,
		OclTextfield
	],
	declarations: [
		OclLabelDirective,
		OclInputDirective,
		OclErrorDirective,
		OclTextfield
	],
})
export class OclTextfieldModule {
}

export * from './textfield.component';