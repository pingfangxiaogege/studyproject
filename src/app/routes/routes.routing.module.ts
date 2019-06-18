import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DefaultComponent } from '../layout/default/default.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgComponent } from './ng/ng.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: {title: '主页'} },
      { path: 'ng-basic', component: NgComponent, data: {title: 'angular'} }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];
@NgModule( {
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class RouterModuleRouting {}
