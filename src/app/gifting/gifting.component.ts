import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-gifting',
  standalone: false,
  templateUrl: './gifting.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./gifting.component.scss']
})
export class GiftingComponent {
  PathToImage = './assets/images/muistaminen otsikko kupari.png';
}
