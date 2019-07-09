import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  {path: 'animation-basic', component: AnimationComponent}
];
@NgModule( {
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssModuleRouting {}
