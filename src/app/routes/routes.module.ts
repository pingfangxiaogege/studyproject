import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModuleRouting } from './routes.routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModuleRouting
  ],
  exports: [],
  declarations: [HomeComponent]
})
export class RoutesModule { }
