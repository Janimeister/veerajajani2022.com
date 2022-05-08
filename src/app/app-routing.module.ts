import { FaqComponent } from './faq/faq.component';
import { RegistrationComponent } from './registration/registration.component';
import { GettingThereComponent } from './getting-there/getting-there.component';
import { BasicInformationComponent } from './basic-information/basic-information.component';
import { StayingComponent } from './staying/staying.component';
import { GiftingComponent } from './gifting/gifting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 { path: '', component: BasicInformationComponent},
 { path: 'muistaminen', component: GiftingComponent },
 { path: 'majapaikkoja', component: StayingComponent},
 { path: 'mitamissamilloin', component: BasicInformationComponent},
 { path: 'kulkeminen', component: GettingThereComponent},
 { path: 'ilmoittautuminen', component: RegistrationComponent},
 { path: 'ukk', component: FaqComponent},
 { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
