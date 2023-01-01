import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.apiBaseUrl;

@Injectable({
  providedIn: 'root'
})
export class CategoriesControlService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllCategories(){
    return this.httpClient.get<any>(`${baseUrl}/products/categories`);
  }
  getProductByCategory(category:any){
    return this.httpClient.get<any>(`${baseUrl}/products/category/${category}`);
   }
}
