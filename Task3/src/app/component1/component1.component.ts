import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public names = 'Hi';
  public message = '';
 // public isDisabled = true;

  onclick(values) {
    this.names = 'hello From ParentApp ' + values;
   // this.isDisabled = false;
  }

  constructor() { }

  ngOnInit() {
  }
}
