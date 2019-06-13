import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from './token.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TokenService, AuthGuard],
  declarations: []
})
export class ServiceModule { }
