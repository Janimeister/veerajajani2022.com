import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  PathToImage: string;
  
  constructor() { 
    this.PathToImage = './assets/images/ilmoittautuminen_vihrea.jpg'
  }

  ngOnInit(): void {
  }

}
