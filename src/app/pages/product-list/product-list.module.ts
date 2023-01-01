import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import { ProductCardOneModule } from './../../shared/lazy-component/product-card-one/product-card-one.module';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MaterialModule,
    ProductCardOneModule,
    RouterModule,
    SwiperModule
  ]
})
export class ProductListModule { }
