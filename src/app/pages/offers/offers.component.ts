import { Component, OnInit } from '@angular/core';
import{Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  constructor(
    private clipboard:Clipboard
  ) { }


  ngOnInit(): void {

  }

  offerData:any[]=[
    {
      _id:"1",
      image:"./assets/images/temp/offer/01.jpg",
      routerLink:"#",
      offerCode:"120484",
    },
    {
      _id:"2",
      image:"./assets/images/temp/offer/02.jpg",
      routerLink:"#",
      offerCode:"120484",
    },
    {
      _id:"3",
      image:"./assets/images/temp/offer/03.jpg",
      routerLink:"#",
      offerCode:"120484",
    },
    {
      _id:"4",
      image:"./assets/images/temp/offer/04.jpg",
      routerLink:"#",
      offerCode:"12084",
    },
    {
      _id:"5",
      image:"./assets/images/temp/offer/05.jpg",
      routerLink:"#",
      offerCode:"120484",
    },
    {
      _id:"6",
      image:"./assets/images/temp/offer/06.jpg",
      routerLink:"#",
      offerCode:"120484",
    },
    {
      _id:"7",
      image:"./assets/images/temp/offer/07.jpg",
      routerLink:"#",
      offerCode:"120484",
    },
    {
      _id:"8",
      image:"./assets/images/temp/offer/08.jpg",
      routerLink:"#",
      offerCode:"120484",
    },
    {
      _id:"9",
      image:"./assets/images/temp/offer/09.jpg",
      routerLink:"#",
      offerCode:"120484",
    },
    {
      _id:"10",
      image:"./assets/images/temp/offer/10.jpg",
      routerLink:"#",
      offerCode:"12046757",
    }
  ]
/*** code copy */
copyOfferCode(code:any,btn:any){
  btn.innerHTML ="Copied!";
  this.clipboard.copy(code);
}

}
