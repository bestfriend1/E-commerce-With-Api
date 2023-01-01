import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from './feature-card.component';



@NgModule({
  declarations: [
    FeatureCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FeatureCardComponent
  ]
})
export class FeatureCardModule { }
