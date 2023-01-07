import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchProductsRoutingModule } from './search-products-routing.module';
import { SearchProductsComponent } from './search-products.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { ProductCardOneModule } from 'src/app/shared/lazy-component/product-card-one/product-card-one.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    SearchProductsComponent
  ],
  imports: [
    CommonModule,
    SearchProductsRoutingModule,
    MaterialModule,
    ProductCardOneModule,
    SwiperModule
  ]
})
export class SearchProductsModule { }
