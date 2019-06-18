import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  isCollapsed = false;
  @Output() collapsedChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed);
  }

}
