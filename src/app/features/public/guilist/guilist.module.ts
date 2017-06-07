import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuilistRoutingModule } from './guilist-routing.module';

import { GuilistComponent } from './guilist.component';
import { OclButton } from '../../../ocl/button/button.component';
import { OclTextfield } from '../../../ocl/textfield/textfield.component';

@NgModule({
    declarations: [GuilistComponent, OclButton, OclTextfield],
    imports: [
        CommonModule,
        GuilistRoutingModule
    ],
})

export class GuilistModule {};