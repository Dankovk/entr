import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DropdownModule} from 'primeng/primeng';
import {OclDropdownComponent} from './dropdown.component';



@NgModule({
	imports: [
		CommonModule,
		DropdownModule
	],
	exports: [
		OclDropdownComponent
	],
	declarations: [
		OclDropdownComponent
	],
})
export class OclDropdownModule {
}
