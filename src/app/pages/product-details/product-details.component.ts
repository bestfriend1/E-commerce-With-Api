import { CarouselCntrlService } from './../../services/carousel-cntrl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductControlService } from '../../services/product-control.service';
import { Product } from '../../interfaces/product';
import { NgxLoaderService } from '../../services/ngx-loader.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  step = 1;
  _id: any;
  _categorie: any;
  products!: Product[];
  singleProduct!: Product;

  constructor(
    private router: Router,
    private carousel: CarouselCntrlService,
    private productService: ProductControlService,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxLoaderService
  ) { }

  ngOnInit(): void {

    this.activateRoute.queryParamMap.subscribe((q) => {
      if (q) {
        this._id = q.get('productId');
        console.log(this._id);
        this.getSingleProduct(this._id);
      }else{
        console.log('Id not found');
      }
    })
    this.activateRoute.queryParamMap.subscribe((q) => {
      if (q) {
        this._categorie = q.get('cat');
        console.log(this._categorie);
      }
    })
    /**
     * CALL ALL API HANDLE 
     */

  }

  /*** 
   * stepControll()
   * 
   */
  stepControll(number: any) {
    this.step = number;
  }

  /**
   * HTTP REQUEST HANDLE
   * getSingleProduct();
   * getProductByCategory();
   */
  getSingleProduct(_id: any) {
    this.ngxLoader.onShowLoader();
    this.productService.getSingleProductById(_id).subscribe(
      (res) => {
        if (res) {
          this.singleProduct = res;
          console.log(this.singleProduct);
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
