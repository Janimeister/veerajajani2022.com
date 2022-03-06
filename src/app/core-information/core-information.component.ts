import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-information',
  templateUrl: './core-information.component.html',
  styleUrls: ['./core-information.component.scss']
})
export class CoreInformationComponent implements OnInit {

  PathToImage: String;

  constructor() { 
    this.PathToImage = './assets/images/MitäMissäMilloin kulta.jpg'
  }
  

  ngOnInit(): void {
  }

}
