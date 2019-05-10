import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DefaultComponent } from '../layout/default/default.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: {title: '主页'} },
    ]
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
