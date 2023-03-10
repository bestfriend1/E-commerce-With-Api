import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
const baseUrl = environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class UserAuthHandleService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  // AUTH HTTP REQUEST 
  userLogin(logData:any){
    return this.httpClient.post<any>(`${baseUrl}/auth/login`,logData);
  }

  //ADD USER  HTTP REQUEST

  userReg(data:any){
    return this.httpClient.post(`${baseUrl}/users/add`,data);
  }

  getSingleUserById(userId:any){
    return this.httpClient.get(`${baseUrl}/users/${userId}`);
  }


}
