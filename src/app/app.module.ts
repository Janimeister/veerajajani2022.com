import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import { TabsModule } from 'primeng/tabs';
import { definePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara';

const WeddingPreset = definePreset(Lara, {
  components: {
    tabs: {
      tablist: {
        borderWidth: '0 0 1px 0',
        borderColor: 'rgba(0, 0, 0, 0.12)',
      },
      tab: {
        borderWidth: '0',
        borderColor: 'transparent',
        hoverBorderColor: 'transparent',
        activeBorderColor: 'transparent',
        color: 'rgba(0, 0, 0, 0.6)',
        hoverColor: 'rgba(0, 0, 0, 0.87)',
        activeColor: '#3F51B5',
        fontWeight: '600',
      },
      activeBar: {
        height: '2px',
        bottom: '0',
        background: '#3F51B5',
      },
      colorScheme: {
        light: {
          tab: {
            background: 'transparent',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
        },
        dark: {
          tab: {
            background: 'transparent',
            hoverBackground: 'transparent',
            activeBackground: 'transparent',
          },
        },
      },
    },
  },
});

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { GettingThereComponent } from './getting-there/getting-there.component';
import { StayingComponent } from './staying/staying.component';
import { GiftingComponent } from './gifting/gifting.component';
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
    PlaceholderComponent,
    RegistrationComponent,
    FaqComponent,
    ProgramComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabsModule,
  ],
  providers: [
    providePrimeNG({
      theme: {
        preset: WeddingPreset,
        options: {
          darkModeSelector: false,
        },
      },
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
