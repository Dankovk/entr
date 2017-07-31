import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclAccountMenu} from "./account-menu.component";

export * from './account-menu.component';

@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclAccountMenu
	],
	declarations: [
		OclAccountMenu
	],
})
export class OclAccountMenuModule {}
