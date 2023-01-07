import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { MaterialModule } from '../../../material/material.module';
import { SwiperModule } from 'swiper/angular';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ReviewComponent } from './review/review.component';
import { AddressComponent } from './address/address.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AddNewAddressComponent } from './add-new-address/add-new-address.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';


@NgModule({
  declarations: [
    AccountComponent,
    BasicInfoComponent,
    ReviewComponent,
    AddressComponent,
    WishlistComponent,
    TransactionComponent,
    AddNewAddressComponent,
    ChangePasswordComponent,
    OrderListComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountModule { }
