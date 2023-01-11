import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefreshControllService implements OnInit {

  refreshUserLogin = new Subject<void>();

  constructor() { }
  ngOnInit(): void {

  }

  //REFRESH USER LOGIN

  get needRefreshOnLogin$() {
    return this.refreshUserLogin ;
  }

  refreshUserLogin$() {
    this.refreshUserLogin.next();
  }




}
