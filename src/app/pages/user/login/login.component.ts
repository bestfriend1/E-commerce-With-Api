import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxLoaderService } from '../../../services/ngx-loader.service';
import { UserAuthHandleService } from './../../../services/user-auth-handle.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formData!: FormGroup;

  //AUTH SUBSCRIPTION
  subAuth!: Subscription;

  constructor(
    private router: Router,
    private ngxLoader: NgxLoaderService,
    private userService: UserAuthHandleService
  ) { }

  ngOnInit(): void {
    this.loginFormInit();
  }

  loginFormInit() {
    this.formData = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      terms: new FormControl(false, Validators.required)
    })
  }

  //USER AUTH HTTP REQUEST HANDLE 
  userLoginAuth() {
    if (this.formData.valid) {
      this.ngxLoader.onShowLoader();
      this.subAuth = this.userService.userLogin(this.formData.value).subscribe(
        (res) => {
          if (res) {
            let token = JSON.stringify(res.token);
            let userInfo = JSON.stringify(res);
            localStorage.setItem('userToken', token);
            localStorage.setItem('userInfo', userInfo);
            this.router.navigate(['./','account']);
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
    } else {
      this.formData.markAllAsTouched();
    }
  }


}
