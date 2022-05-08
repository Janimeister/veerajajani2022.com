import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifting',
  templateUrl: './gifting.component.html',
  styleUrls: ['./gifting.component.scss']
})
export class GiftingComponent implements OnInit {

  PathToImage: string;
  
  constructor() { 
    this.PathToImage = './assets/images/muistaminen otsikko kupari.png'
  }

  ngOnInit(): void {
  }

}
