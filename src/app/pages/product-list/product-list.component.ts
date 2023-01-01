import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  filterSlide = false;
  constructor() { }

  ngOnInit(): void {
  }
  /*** 
   * controllFilterSlide
   */
  filterSlideToggle(){
    this.filterSlide =! this.filterSlide;
  }




  /*** products area */
  products: any[] = [
    {
      _id:1,
      image: './assets/images/temp/products/01.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:2,
      image: './assets/images/temp/products/02.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:3,
      image: './assets/images/temp/products/03.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:4,
      image: './assets/images/temp/products/04 (1).jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:5,
      image: './assets/images/temp/products/05 (1).jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:6,
      image: './assets/images/temp/products/06.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:7,
      image: './assets/images/temp/products/07.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:8,
      image: './assets/images/temp/products/08.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:10,
      image: './assets/images/temp/products/01.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:11,
      image: './assets/images/temp/products/02.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:12,
      image: './assets/images/temp/products/03.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:13,
      image: './assets/images/temp/products/04 (1).jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:14,
      image: './assets/images/temp/products/05 (1).jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:15,
      image: './assets/images/temp/products/06.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:16,
      image: './assets/images/temp/products/07.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
    {
      _id:17,
      image: './assets/images/temp/products/08.jpg',
      name: 'Fresh Green Chilis',
      prvPrice: 34,
      currPrice: 23,
      unit: 'kilo',
    },
  ];

}
