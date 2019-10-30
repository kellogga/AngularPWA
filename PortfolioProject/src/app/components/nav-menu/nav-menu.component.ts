import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  SidebarOn() {
    var nav = document.getElementById("desktop-nav")
    var toggle = document.getElementById("sidebar-toggle");
    nav.classList.remove("display-none");
    toggle.classList.add("display-none");
  }

  SidebarOff() {
    var nav = document.getElementById("desktop-nav")
    var toggle = document.getElementById("sidebar-toggle");
    nav.classList.add("display-none");
    toggle.classList.remove("display-none");
  }

}
