import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuilistRoutingModule } from './guilist-routing.module';

import { GuilistComponent } from './guilist.component';
import { OclButtonModule } from '../../../ocl/button/index';
import { OclTextfield } from '../../../ocl/textfield/textfield.component';

@NgModule({
    declarations: [GuilistComponent, OclTextfield],
    imports: [
        CommonModule,
        GuilistRoutingModule,
        OclButtonModule
    ],
})

export class GuilistModule {};