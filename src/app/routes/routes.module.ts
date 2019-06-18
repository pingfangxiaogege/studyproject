import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModuleRouting } from './routes.routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgComponent } from './ng/ng.component';
import { LoginService } from './login/login.service';

const Comp = [
  NgComponent,
  HomeComponent,
  LoginComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModuleRouting
  ],
  exports: [],
  providers: [LoginService],
  declarations: [...Comp]
})
export class RoutesModule { }
