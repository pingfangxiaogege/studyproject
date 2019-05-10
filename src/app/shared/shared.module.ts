import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
// 解决图标找不到问题
import { ICONS_AUTO } from '../../style-icons-auto';
const icons: IconDefinition[] = ICONS_AUTO;

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgZorroAntdModule
  ],
  exports: [
    RouterModule,
    NgZorroAntdModule,
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class SharedModule { }
