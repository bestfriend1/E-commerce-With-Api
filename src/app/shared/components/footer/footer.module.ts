import { SwiperModule } from 'swiper/angular';
import { MaterialModule } from './../../../material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SwiperModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
