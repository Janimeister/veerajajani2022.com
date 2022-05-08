import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getting-there',
  templateUrl: './getting-there.component.html',
  styleUrls: ['./getting-there.component.scss']
})
export class GettingThereComponent implements OnInit {

  PathToImage: string;
  
  constructor() { 
    this.PathToImage = './assets/images/kulkeminen.png'
  }
  ngOnInit(): void {
  }

}
