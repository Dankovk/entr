import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclDatefieldComponent} from "./datefield.component";
import {CalendarModule} from 'primeng/primeng';



@NgModule({
	imports: [
		CommonModule,
		CalendarModule
	],
	exports: [
		OclDatefieldComponent
	],
	declarations: [
		OclDatefieldComponent
	],
})
export class OclDatefieldModule {
}
