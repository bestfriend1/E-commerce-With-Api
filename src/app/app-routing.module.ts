import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path:"**",
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy',
    // initialNavigation: 'enabled',
    anchorScrolling: 'enabled',
    initialNavigation:'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
