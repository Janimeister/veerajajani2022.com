import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Veera ja Jani 2022';
}
