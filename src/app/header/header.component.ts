import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  PathToImage = './assets/images/veera_jani.png';
}
