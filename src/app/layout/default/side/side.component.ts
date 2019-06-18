import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  @Input() isCollapsed: boolean;
  constructor() { }

  ngOnInit() {
  }

}
