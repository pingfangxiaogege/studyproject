import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MarkdownComponent } from './markdown/markdown.component';

const routes: Routes = [
  {path: '', component: MarkdownComponent}
];
@NgModule( {
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkdownModuleRouting {}
