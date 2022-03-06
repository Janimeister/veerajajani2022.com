import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {

  PathToImage: string;
  
  constructor() { 
    this.PathToImage = './assets/images/veera_jani.png'
  }

  ngOnInit(): void {
  }

}
