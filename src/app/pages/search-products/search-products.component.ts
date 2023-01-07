import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { NgxLoaderService } from 'src/app/services/ngx-loader.service';
import { ProductControlService } from 'src/app/services/product-control.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss']
})
export class SearchProductsComponent implements OnInit {

  //DATA STORE VARIABLES;

  products!: Product[];
  categoryName: any;
  searchQuery: any;
  subRoute1!: Subscription;
  subRoute2!: Subscription;



  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private productService: ProductControlService,
    private ngxLoader: NgxLoaderService
  ) { }


  ngOnInit(): void {

    this.subRoute1 = this.activateRoute.queryParamMap.subscribe((qParam) => {
      this.searchQuery = qParam.get('q');
      if (this.searchQuery) {
        this.searchProduct(this.searchQuery);
      }
    })

  }
  /**
   * HTTP REQUEST HANDLE 
   * getAllProduct();
   * getProductByCategory();
   */

  searchProduct(q: any) {
    this.ngxLoader.onShowLoader();
    this.subRoute2 = this.productService.searchAllProduct(q).subscribe(
      (res) => {
        if (res) {
          this.products = res.products;
          console.log(this.products);
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


  ngOnDestroy(): void {
    if (this.subRoute1) {
      this.subRoute1.unsubscribe();
    }
    if(this.subRoute2){
      this.subRoute2.unsubscribe(); 
    }
  }

}
