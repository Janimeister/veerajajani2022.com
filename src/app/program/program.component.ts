import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  PathToImage: string;

  constructor() { 
    this.PathToImage = './assets/images/ohjelma aikajana.png'
  }

  ngOnInit(): void {
  }

}
