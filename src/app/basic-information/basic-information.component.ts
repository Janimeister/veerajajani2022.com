import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-basic-information',
  standalone: false,
  templateUrl: './basic-information.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent {
  PathToImage = './assets/images/MitäMissäMilloin kulta.jpg';
}
