import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuilistComponent } from './guilist.component';

const guilistRoutes: Routes = [{
    path: '',
    component: GuilistComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(guilistRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GuilistRoutingModule { }
