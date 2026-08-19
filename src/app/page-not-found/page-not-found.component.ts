import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: false,
  templateUrl: './page-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent { }
