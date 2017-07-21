import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {OclAssignmentCard} from "./assignment-card.component";
import {OclAssignmentItemModule} from "../assignment-item/assignment-item.module";


export * from './assignment-card.component';

@NgModule({
    imports: [
        CommonModule,
        OclAssignmentItemModule
    ],
    exports: [
        OclAssignmentCard
    ],
    declarations: [
        OclAssignmentCard
    ],
})
export class OclAssignmentCardModule {
}