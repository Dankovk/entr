import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclWebinarCard} from "./webinar-card.component";

export * from './webinar-card.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        OclWebinarCard
    ],
    declarations: [
        OclWebinarCard
    ],
})
export class OclWebinarCardModule {
}