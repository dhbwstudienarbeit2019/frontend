import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  public navbarCollapsed = true;
  public components = ["c1","c2","c3"];

  ngOnInit() {
  }

}
