import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-program',
  standalone: false,
  templateUrl: './program.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent {
  PathToImage = './assets/images/ohjelma aikajana.png';
}
