import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-lib',
  template: `
    <p>
      ng-lib works! <img class="m-1" src="assets/avatar-1.png" alt="avatar-1"/>
    </p>
  `,
  styles: [
  ]
})
export class NgLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
