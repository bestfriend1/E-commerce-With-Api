import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { ReviewComponent } from './review/review.component';
import { AddressComponent } from './address/address.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {
    path:"",
    component:AccountComponent,
    children:[
      {path: '', redirectTo: 'basic-info'},
      {path: 'basic-info', component: BasicInfoComponent},
      {path: 'reviews', component: ReviewComponent},
      {path: 'address', component: AddressComponent},
      {path: 'wishlist', component: WishlistComponent},
      {path: 'transactions', component: TransactionComponent},
      {path: 'change-password', component: ChangePasswordComponent},
      {path: 'order-list', component:OrderListComponent},
      {path: 'order-details', component:OrderDetailsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
