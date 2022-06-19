import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  items!: MenuItem[];
  activeItem!: MenuItem;


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Mitä, Missä, Milloin', routerLink: "/mitamissamilloin"},
      {label: 'Majapaikkoja', routerLink: "/majapaikkoja"},
      {label: 'Muistaminen', routerLink: "/muistaminen"},
      {label: 'Kulkeminen', routerLink: "/kulkeminen"},
      {label: 'Ilmoittautuminen', routerLink: "/ilmoittautuminen"},
      {label: 'Ohjelma', routerLink: "/ohjelma"},
      {label: 'UKK', routerLink: "/ukk"}
  ];
  this.activeItem = this.items[0];
  }

}
