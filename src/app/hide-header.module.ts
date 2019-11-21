import { NgModule } from '@angular/core';
// tslint:disable-next-line:import-spacing
import {HideHeaderDirective} from './hide-header.directive';

@NgModule({
    declarations: [
        HideHeaderDirective
    ],
    exports: [
        HideHeaderDirective
    ]
})
export class HideHeaderDirectiveModule { }
