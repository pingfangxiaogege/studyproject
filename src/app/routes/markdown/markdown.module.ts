import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownComponent } from './markdown/markdown.component';
import { MarkdownModuleRouting } from './markdown.routing.module';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MarkdownModuleRouting],
  declarations: [MarkdownComponent]
})
export class MarkdownModule { }
