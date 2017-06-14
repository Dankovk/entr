import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclTabs} from "./tabs.component";
import {OclTab} from "./tab.component";

export * from './tabs.component';
export * from './tab.component';


@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclTabs,
		OclTab
	],
	declarations: [
		OclTabs,
		OclTab
	],
})
export class OclTabsModule {
}