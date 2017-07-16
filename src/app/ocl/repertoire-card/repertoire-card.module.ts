import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclRepertoireCard} from "./repertoire-card.component";

export * from './repertoire-card.component';

@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		OclRepertoireCard
	],
	declarations: [
		OclRepertoireCard
	],
})
export class OclRepertoireCardModule {}
