import { Component } from '@angular/core';

@Component({
  selector: 'app-getting-there',
  standalone: false,
  templateUrl: './getting-there.component.html',
  styleUrls: ['./getting-there.component.scss']
})
export class GettingThereComponent {
  PathToImage = './assets/images/kulkeminen.png';
  PathToMap = './assets/images/kartta.png';
}
