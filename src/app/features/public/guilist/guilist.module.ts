import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuilistRoutingModule } from './guilist-routing.module';

import { GuilistComponent } from './guilist.component';
import { OclButton } from '../../../ocl/button/button.component';

@NgModule({
    declarations: [GuilistComponent, OclButton],
    imports: [
        CommonModule,
        GuilistRoutingModule
    ],
})

export class GuilistModule {};