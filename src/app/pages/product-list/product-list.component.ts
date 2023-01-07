import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductControlService } from '../../services/product-control.service';
import { NgxLoaderService } from '../../services/ngx-loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  //DATA STORE VARIABLES;

  products!: Product[];
  categoryName: any;
  searchQuery: any;

  filterSlide = false;
  //SUBSCRIPTION
  subCategory!: Subscription;
  subProduct!: Subscription;
  subProductByCat!: Subscription;


  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private productService: ProductControlService,
    private ngxLoader: NgxLoaderService
  ) { }


  ngOnInit(): void {
    // GET CATEGORY QUERY PERAMITTER
    this.subCategory = this.activateRoute.queryParamMap.subscribe((qParam) => {
      this.categoryName = qParam.get("categoryName");
      if (this.categoryName) {
        this.getProductByCategory(this.categoryName);
      } else {
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
    this.subProduct = this.productService.getAllProduct().subscribe(
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
    this.subProductByCat = this.productService.getProductByCategory(category).subscribe((res) => {
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



  //ON DESTROY ALL SUBSCRIPTION
  ngOnDestroy(): void {
    if (this.subProduct) {
      this.subProduct.unsubscribe();
    }
    if (this.subProductByCat) {
      this.subProductByCat.unsubscribe();
    }
    if (this.subCategory) {
      this.subCategory.unsubscribe();
    }
  }


}
