import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  standalone: false,
  templateUrl: './placeholder.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent {
  PathToImage = './assets/images/veera_jani.png';
}
