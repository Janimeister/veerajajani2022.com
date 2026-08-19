import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-staying',
  standalone: false,
  templateUrl: './staying.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./staying.component.scss']
})
export class StayingComponent {
  PathToImage = './assets/images/majapaikkoja_vihrea.jpg';
}
