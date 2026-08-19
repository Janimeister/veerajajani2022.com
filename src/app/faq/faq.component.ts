import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  PathToImage = './assets/images/UKK vihrea.png';
}
