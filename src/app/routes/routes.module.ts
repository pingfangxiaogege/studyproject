import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModuleRouting } from './routes.routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModuleRouting
  ],
  exports: [],
  declarations: [HomeComponent, LoginComponent]
})
export class RoutesModule { }
