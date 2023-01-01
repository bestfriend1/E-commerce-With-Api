import { CarouselCntrlService } from './../../services/carousel-cntrl.service';
import { Component, HostListener, OnDestroy, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy,AfterViewInit {
  @ViewChild("input") searchInput!:ElementRef;
  headerTop = true;
  resSearchShow = false;
  headerFixed = false;
  cartSlide = false;
  headerOnHide = true;
  /***
   * subscription
   */
    private headerHideRoute!:Subscription;
    /***
     * Search Anim Proparty
     */
    txt ="Search products in greeny...";
    char = 0;
    typeOutOnGoing:any;


  constructor(
    private router:Router,
    private carousel:CarouselCntrlService 
  ) { }
  ngAfterViewInit(): void {
    this.searchAnim();
  }
 

  ngOnInit(): void {
    this.scrollTopToStart();
    this.headerControll();
  }

  /**
   * Close Header TopBar
   */
  closeHeaderTop(){
    this.headerTop = false;
  }
  /***
   * Responsive search bar toggle 
   */
  resSearchBoxToggle(){
    this.resSearchShow =! this.resSearchShow;
  }
  /***
   * header Fixed;
   */
  @HostListener('window:scroll')
  scrollBody(){
    if(window.scrollY > 400 ){
      this.headerFixed = true;
      console.log('Header Fixed');
    }else{
      this.headerFixed = false;
      console.log('Header Not Fixed');
    }
  }
  /***
   * Scroll Top To Start
   */
  scrollTopToStart(){
    this.router.events.subscribe((e) =>{
      if(!(e instanceof NavigationEnd)){
        return;
      }
      window.scrollBy(0,0);
    })
   
  }/** End */
  /**
   * HeaderControll()
   */
  headerControll(){
    //Navigate controll
    this.headerHideRoute = this.router.events.subscribe(() =>{
      if(this.router.url == "/login" || this.router.url == "/registration" || this.router.url == "/reset-password"){
        this.headerOnHide = false;
      }else{
        this.headerOnHide = true;
      }
    })
    //Initial Load Controll 
    if(this.router.url == "/login" || this.router.url == "/registration" || this.router.url == "/reset-password"){
      this.headerOnHide = false;
    }else{
      this.headerOnHide = true;
    }
    
  }



  /**
   *  cartSlideShow()
   *  cartSlideHide()
   */
  cartSlideShow(){
    this.cartSlide = true;
  }
  cartSlideHide(){
    this.cartSlide = false;
  }
  /**
   * Animation
   */
  searchAnim(){
    const target = this.searchInput.nativeElement as HTMLInputElement;
    target.placeholder = "|";
    this.typeIt(target);
  }
  /***
   * typeIt();
   */
  typeIt(target:HTMLInputElement){
    var time = 180;
     this.typeOutOnGoing = setInterval(() => {
      this.char++;
      var typeValue = this.txt.slice(0, this.char);
      target.placeholder = typeValue + "|";
       /***
        * Char Condition
        */
        if(this.char == this.txt.length){
          this.char = 0;
          target.placeholder = "|";
        }
     },time);
  }

  /**
   * Destroy Huck
   */
  ngOnDestroy(): void {

    if(this.headerHideRoute){
      this.headerHideRoute.unsubscribe();
    }
   
  }
  

}
