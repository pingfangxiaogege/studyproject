import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from './animation/animation.component';
import { CssModuleRouting } from './css.routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CssModuleRouting],
  declarations: [AnimationComponent]
})
export class CssModule { }
