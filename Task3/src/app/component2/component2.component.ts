import {Component, OnInit, Input, EventEmitter, Output, } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  
  @Input('parentData') public data;

   @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  fireEvent(input) {
    this.childEvent.emit('from Child ' + input);
  }

}
