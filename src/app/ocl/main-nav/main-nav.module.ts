import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclMainNav} from "./main-nav.component";


@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclMainNav
	],
	declarations: [
		OclMainNav
	],
})
export class OclMainNavModule {
}