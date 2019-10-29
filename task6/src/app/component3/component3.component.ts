import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('siblingData') public data;

  constructor() { }

  ngOnInit() {
  }
}
