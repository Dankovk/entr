import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclAssignmentItem} from "./assignment-item.component";
import {OclAssignmentProgressModule} from "../assignment-progress/assignment-progress.module";


export * from './assignment-item.component';

@NgModule({
    imports: [
        CommonModule,
        OclAssignmentProgressModule
    ],
    exports: [
        OclAssignmentItem
    ],
    declarations: [
        OclAssignmentItem
    ],
})
export class OclAssignmentItemModule {
}