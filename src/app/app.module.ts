import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BasicInformationComponent } from './basic-information/basic-information.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { CoreInformationComponent } from './core-information/core-information.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GettingThereComponent } from './getting-there/getting-there.component';
import { StayingComponent } from './staying/staying.component';
import { GiftingComponent } from './gifting/gifting.component';
import {DividerModule} from 'primeng/divider';
import {GMapModule} from 'primeng/gmap';
import { GoogleformsComponent } from './googleforms/googleforms.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInformationComponent,
    HeaderComponent,
    FooterComponent,
    NavigationMenuComponent,
    CoreInformationComponent,
    RsvpComponent,
    GettingThereComponent,
    StayingComponent,
    GiftingComponent,
    GoogleformsComponent,
    GooglemapsComponent,
    PlaceholderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabMenuModule,
    DividerModule,
    GMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
