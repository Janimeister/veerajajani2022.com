import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Etusivu', icon: 'pi pi-fw pi-home'},
      {label: 'Juhlapaikka', icon: ''},
      {label: 'Majoitus', icon: ''},
      {label: 'FAQ', icon: ''},
      {label: 'Tietoa sivusta', icon: ''}
  ];

  }

}
