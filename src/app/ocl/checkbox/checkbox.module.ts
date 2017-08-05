import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclCheckboxComponent} from "./checkbox.component";




@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclCheckboxComponent
	],
	declarations: [
		OclCheckboxComponent
	],
})
export class OclCheckboxModule {
}
