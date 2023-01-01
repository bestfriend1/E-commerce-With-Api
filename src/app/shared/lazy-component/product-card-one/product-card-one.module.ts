import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardOneComponent } from './product-card-one.component';



@NgModule({
  declarations: [
    ProductCardOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ProductCardOneComponent
  ]
})
export class ProductCardOneModule { }
