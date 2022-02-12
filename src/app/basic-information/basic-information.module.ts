import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicInformationRoutingModule } from './basic-information-routing.module';
import { BasicInformationComponent } from './basic-information.component';


@NgModule({
  declarations: [
    BasicInformationComponent
  ],
  imports: [
    CommonModule,
    BasicInformationRoutingModule
  ]
})
export class BasicInformationModule { }
