import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { BasicInformationComponent } from './basic-information/basic-information.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GettingThereComponent } from './getting-there/getting-there.component';
import { StayingComponent } from './staying/staying.component';
import { GiftingComponent } from './gifting/gifting.component';
import {DividerModule} from 'primeng/divider';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { RegistrationComponent } from './registration/registration.component';
import { FaqComponent } from './faq/faq.component';
import { ProgramComponent } from './program/program.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicInformationComponent,
    HeaderComponent,
    FooterComponent,
    NavigationMenuComponent,
    RsvpComponent,
    GettingThereComponent,
    StayingComponent,
    GiftingComponent,
    GooglemapsComponent,
    PlaceholderComponent,
    RegistrationComponent,
    FaqComponent,
    ProgramComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
