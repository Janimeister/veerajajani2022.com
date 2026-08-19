import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  standalone: false,
  templateUrl: './rsvp.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent {
  PathToImage = './assets/images/ilmoittautuminen vihreä.jpg';
}
