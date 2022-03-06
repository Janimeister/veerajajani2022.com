import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {

  PathToImage: String;

  constructor() { 
    this.PathToImage = './assets/images/veera_jani.png'
  }

  ngOnInit(): void {
  }

}
