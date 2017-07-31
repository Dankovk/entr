import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclDrawerNav} from "./drawer-nav.component";


@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclDrawerNav
	],
	declarations: [
		OclDrawerNav
	],
})
export class OclDrawerNavModule {
}
