import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBasicInfoComponent } from './edit-basic-info.component';
import { MaterialModule } from '../../../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    EditBasicInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports:[
    EditBasicInfoComponent
  ]
})
export class EditBasicInfoModule { }
