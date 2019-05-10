import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styles: [
    ` :host ::ng-deep{
      height: 100%;
    }
      .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
      }

      .trigger:hover {
        color: #1890ff;
      }

      .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
      }
    `
  ]
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  constructor() { }

  ngOnInit() {
  }
  // /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
