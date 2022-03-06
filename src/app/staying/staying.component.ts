import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staying',
  templateUrl: './staying.component.html',
  styleUrls: ['./staying.component.scss']
})
export class StayingComponent implements OnInit {

  PathToImage: string;
  
  constructor() { 
    this.PathToImage = './assets/images/MitäMissäMilloin kulta.jpg'
  }

  ngOnInit(): void {
  }

}
