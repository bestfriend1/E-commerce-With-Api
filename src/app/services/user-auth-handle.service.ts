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
}
