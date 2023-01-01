import { SwiperModule } from 'swiper/angular';
import { ProductCardOneModule } from './../../shared/lazy-component/product-card-one/product-card-one.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';


@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    ProductCardOneModule,
    SwiperModule
  ]
})
export class ProductDetailsModule { }
