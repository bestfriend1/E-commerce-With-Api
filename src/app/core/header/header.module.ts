import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './../../material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
  ]
})
export class HeaderModule { }
