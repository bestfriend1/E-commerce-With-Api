import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductControlService } from '../../services/product-control.service';
import { NgxLoaderService } from '../../services/ngx-loader.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  //DATA STORE VARIABLES;

  products!: Product[];
  categoryName:any;

  filterSlide = false;


  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private productService: ProductControlService,
    private ngxLoader: NgxLoaderService
  ) { }

  ngOnInit(): void {
    this.activateRoute.queryParamMap.subscribe((qParam) => {
      this.categoryName = qParam.get("categoryName");
      if(this.categoryName ){
          this.getProductByCategory(this.categoryName);
      }else{
        this.getAllProduct();
      }
    })
  }
  /*** 
   * controllFilterSlide
   */
  filterSlideToggle() {
    this.filterSlide = !this.filterSlide;
  }

  /**
   * HTTP REQUEST HANDLE 
   * getAllProduct();
   * getProductByCategory();
   */

  getAllProduct() {
    this.ngxLoader.onShowLoader();
    this.productService.getAllProduct().subscribe(
      (res) => {
        if (res) {
          this.products = res.products;
          this.ngxLoader.onHideLoader();
        }
      },
      (err) => {
        if (err) {
          console.log(err);
          this.ngxLoader.onHideLoader();
        }
      }
    )
  }
  getProductByCategory(category: any) {
    this.ngxLoader.onShowLoader();
    this.productService.getProductByCategory(category).subscribe((res) => {
      if (res) {
        this.products = res.products;
        this.ngxLoader.onHideLoader();
      }
    },
      (err) => {
        if (err) {
          console.log(err);
          this.ngxLoader.onHideLoader();
        }
      }
    )
  }




}
