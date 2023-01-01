import { CarouselCntrlService } from './../../services/carousel-cntrl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductControlService } from '../../services/product-control.service';
import { Product } from '../../interfaces/product';
import { NgxLoaderService } from '../../services/ngx-loader.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {

  step = 1;
  _id: any;
  _categorie: any;
  products!: Product[];
  singleProduct!: Product;
  selectImg: any;

  constructor(
    private router: Router,
    private carousel: CarouselCntrlService,
    private productService: ProductControlService,
    private activateRoute: ActivatedRoute,
    private ngxLoader: NgxLoaderService
  ) { }

  ngOnInit(): void {

    this.activateRoute.queryParamMap.subscribe((q) => {
      this._id = q.get('productId');
      if (this._id) {
        this.getSingleProduct(this._id);
        console.log('Product-Id', this._id);
      } else {
        console.log('Id Not Founded');
      }
    })
    this.activateRoute.queryParamMap.subscribe((q) => {
      this._categorie = q.get('cat');
      if (this._categorie) {
        this.getProductByCategory(this._categorie);
        console.log(this._categorie);
      } else {
        console.log('Category Not Founded')
      }
    })
    /**
     * CALL ALL API HANDLE 
     */

  }

  ngAfterViewInit(): void {

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

  selectImageControll(image: any) {
    if (image) {
      this.selectImg = image;
    } else {
      this.selectImg = this.singleProduct.thumbnail;
    }
  }





}
