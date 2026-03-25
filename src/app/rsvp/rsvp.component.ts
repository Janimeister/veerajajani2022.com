import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

  PathToImage: string;
  
  constructor() { 
    this.PathToImage = './assets/images/ilmoittautuminen vihreä.jpg'
  }

  ngOnInit(): void {
  }

}
