import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
      {
        path:'',
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path:"home",
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path:"product-details",
        loadChildren: () => import ('./product-details/product-details.module').then(m => m.ProductDetailsModule)
      },
      {
        path:'offers',
        loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule)
      },
      {
        path:"product-list",
        loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
      },
      {
        path:"search-product",
        loadChildren: () => import('./search-products/search-products.module').then(m => m.SearchProductsModule)
      },
      {
        path:"login",
        loadChildren: () => import('./user/login/login.module').then(m => m.LoginModule)
      },
      {
        path:"registration",
        loadChildren: () => import('./user/registration/registration.module').then(m => m.RegistrationModule)
      },
      {
        path:"reset-password",
        loadChildren: () => import('./user/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
      },
      {
        path:'account',
        loadChildren: () => import('./user/account/account.module').then(m => m.AccountModule)
      }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
