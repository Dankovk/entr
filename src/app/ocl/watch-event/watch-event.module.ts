import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclWatchEvent} from "./watch-event.component";

export * from './watch-event.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        OclWatchEvent
    ],
    declarations: [
        OclWatchEvent
    ],
})
export class OclWatchEventModule {
}