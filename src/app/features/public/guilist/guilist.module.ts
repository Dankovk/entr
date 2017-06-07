import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuilistRoutingModule } from './guilist-routing.module';

import { GuilistComponent } from './guilist.component';
import { OclButtonModule } from '../../../ocl/button/index';
import { OclTextfieldModule } from '../../../ocl/textfield/index';

@NgModule({
    declarations: [GuilistComponent],
    imports: [
        CommonModule,
        GuilistRoutingModule,
        OclButtonModule,
        OclTextfieldModule
    ],
})

export class GuilistModule {};