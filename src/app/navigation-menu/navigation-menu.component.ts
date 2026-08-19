import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

interface NavItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-navigation-menu',
  standalone: false,
  templateUrl: './navigation-menu.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit, OnDestroy {
  items: NavItem[] = [
    { label: 'Mitä, Missä, Milloin', route: '/mitamissamilloin' },
    { label: 'Majapaikkoja', route: '/majapaikkoja' },
    { label: 'Muistaminen', route: '/muistaminen' },
    { label: 'Kulkeminen', route: '/kulkeminen' },
    { label: 'Ilmoittautuminen', route: '/ilmoittautuminen' },
    { label: 'Ohjelma', route: '/ohjelma' },
    { label: 'UKK', route: '/ukk' },
  ];

  activeRoute = '/mitamissamilloin';
  private routerSub!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.activeRoute = this.router.url || '/mitamissamilloin';
    this.routerSub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.activeRoute = e.urlAfterRedirects || e.url);
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  onTabChange(route: string | number | undefined): void {
    if (route != null) {
      this.router.navigate([route]);
    }
  }
}
