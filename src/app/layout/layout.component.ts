import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  collapsible: boolean = true;
  collapsed: boolean = true;

  isSession: boolean = false;
  isAdmin: boolean = false;
  fullName: string = 'Nattawuth';

  constructor() { }

  ngOnInit() {
  }

}
