import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
    OclButton,
    OclButtonDirective,
} from './button.component';

export * from './button.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        OclButton,
        OclButtonDirective
    ],
    declarations: [
       OclButton,
       OclButtonDirective
    ],
})
export class OclButtonModule {}