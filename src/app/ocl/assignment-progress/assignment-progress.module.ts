import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclAssignmentProgress} from "./assignment-progress.component";

export * from './assignment-progress.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        OclAssignmentProgress
    ],
    declarations: [
        OclAssignmentProgress
    ],
})
export class OclAssignmentProgressModule {
}