import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Product } from '../interfaces/product';
const baseUrl = environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class ProductControlService implements OnInit {

  constructor(
    private httpClient:HttpClient
  ) { }
  ngOnInit(): void {
    
  }

  /**
   * PRODUCT HTTP REQUEST AND DATA FETCH ,DELETE,UPDATE
   * getAllProduct();
   * getSingleProductById();
   * deleteProduct();
   * updateProduct();
   */

  getAllProduct(){
    return this.httpClient.get<any>(`${baseUrl}/products`);
  }
  
  getSingleProductById(_id:any){
    return this.httpClient.get<Product>(`${baseUrl}/products/${_id}`);
  }
  deleteProduc(_id:any){
    return this.httpClient.delete<any>(`${baseUrl}/products/${_id}`);
  }

  updateProduct(productData:any,_id:any){
    return this.httpClient.put<any>(`${baseUrl}/products/${_id}`,productData);
  }

}
