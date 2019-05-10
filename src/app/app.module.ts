import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } from './shared/shared.module';

// /** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    RoutesModule,
    SharedModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
