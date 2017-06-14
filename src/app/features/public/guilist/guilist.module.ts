import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GuilistRoutingModule} from "./guilist-routing.module";
import {GuilistComponent} from "./guilist.component";
import {OclModule} from "../../../ocl/ocl.module";

@NgModule({
    declarations: [GuilistComponent],
    imports: [
        CommonModule,
        GuilistRoutingModule,
        OclModule
    ],
})

export class GuilistModule {
}
;