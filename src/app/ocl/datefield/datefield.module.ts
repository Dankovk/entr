import {NgModule} from "@angular/core";
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {OclDatefieldComponent} from "./datefield.component";
import {CalendarModule} from 'primeng/primeng';



@NgModule({
	imports: [
		CommonModule,
		CalendarModule,
		FormsModule
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
