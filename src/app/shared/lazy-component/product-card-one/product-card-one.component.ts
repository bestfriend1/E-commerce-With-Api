import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-one',
  templateUrl: './product-card-one.component.html',
  styleUrls: ['./product-card-one.component.scss']
})
export class ProductCardOneComponent implements OnInit {
  
  @Input() product?:any;

  constructor() { }

  ngOnInit(): void {
  }

}
