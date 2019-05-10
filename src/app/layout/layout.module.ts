import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default/default.component';
import { TopComponent } from './default/top/top.component';
import { SideComponent } from './default/side/side.component';
import { SharedModule } from '../shared/shared.module';


const comps = [
  DefaultComponent,
  SideComponent,
  TopComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ...comps
  ],
  exports: [
    ...comps
  ],
  providers: [
  ]
})
export class LayoutModule { }
