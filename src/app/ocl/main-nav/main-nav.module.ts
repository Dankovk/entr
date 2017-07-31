import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclMainNav} from "./main-nav.component";
import {OclAccountMenuModule} from "../account-menu/account-menu.module";


@NgModule({
	imports: [
		CommonModule,
		OclAccountMenuModule
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
