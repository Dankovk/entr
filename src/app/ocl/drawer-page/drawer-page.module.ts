import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclDrawerPageComponent} from "./drawer-page.component";
import {OclDrawerNavModule} from "../drawer-nav/drawer-nav.module";
import {OclMainNavModule} from "../main-nav/main-nav.module";


@NgModule({
	imports: [
		CommonModule,
		OclDrawerNavModule,
		OclMainNavModule
	],
	exports: [
		OclDrawerPageComponent
	],
	declarations: [
		OclDrawerPageComponent
	],
})
export class OclDrawerPageModule {
}
