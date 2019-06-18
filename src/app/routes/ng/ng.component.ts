import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng',
  templateUrl: './ng.component.html',
  styleUrls: ['./ng.component.css']
})
export class NgComponent implements OnInit {
  current = 0;

  constructor() { }

  ngOnInit() {
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }

}
