import { Component, OnInit } from '@angular/core';
import {combineLatest, fromEvent, interval} from 'rxjs';
import { switchMap} from 'rxjs/operators';
import {visitValue} from "@angular/compiler/src/util";

@Component
({
  selector: 'my-app',
  template: `
    <button>Click Me</button>
  `
})
export class AppComponent implements OnInit {
  ngOnInit() {

    const button = document.querySelector('button');

    const click$ = fromEvent(button, 'click');
    const interval$ = interval(1000);

    //Please add code to implement :
    // When click 'Click' button, the console log will print a increased number every one second.










  }
}
