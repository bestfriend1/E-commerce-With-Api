import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit,OnDestroy {
  footerOnHide = true;
  //Subscription
   private footerHideRoute!:Subscription;

  constructor(
    private router:Router
  ) { }


  ngOnInit(): void {
    this.footerControll();
  }

  /**
   * Footer Controll
   */
  footerControll(){
    //Navigate footer hide
    this.footerHideRoute = this.router.events.subscribe(() =>{
      if(this.router.url == "/login" || this.router.url =="/registration" || this.router.url == "/reset-password"){
        this.footerOnHide = false;
      }else{
        this.footerOnHide = true;
      }
    })

    //Initial Footer Hide
    if(this.router.url == "/login" || this.router.url =="/registration" || this.router.url == "/reset-password"){
      this.footerOnHide = false;
    }else{
      this.footerOnHide = true;
    }

  }
  /**
   * Destroy Subscribe
   */

  ngOnDestroy(): void {
    if(this.footerHideRoute){
      this.footerHideRoute.unsubscribe();
    }
  }

}
