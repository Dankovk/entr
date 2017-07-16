import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	OclButton,
	OclButtonDirective,
	OclButtonLargeDirective
} from "./button.component";

export * from './button.component';

@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclButton,
		OclButtonDirective,
		OclButtonLargeDirective
	],
	declarations: [
		OclButton,
		OclButtonDirective,
		OclButtonLargeDirective
	],
})

export class OclButtonModule {}
