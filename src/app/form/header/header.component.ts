import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  status_toggle: boolean = false;
  rotateToggle() {
    this.status_toggle = !this.status_toggle;
  }
}
