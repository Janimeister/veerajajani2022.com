import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  PathToImage = './assets/images/ilmoittautuminen_vihrea.jpg';
}
