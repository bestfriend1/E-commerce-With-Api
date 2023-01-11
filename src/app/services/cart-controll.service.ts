import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
 const baseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class CartControllService {

  constructor(
    private httpClient:HttpClient
  ) { }



  addToCart(carts:any){
    return this.httpClient.post<any>(`${baseUrl}/carts/add`,carts);
  }

  getAllCartByUser(userId:any){
    return this.httpClient.get<any>(`${baseUrl}/carts/user/${userId}`);
  }

  deleteCart(productId:any){
    return this.httpClient.delete(`${baseUrl}/carts/${productId}`)
  }
}
