import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  imgPlaceHolder = '/assets/svg/user.svg';
  userInfo:any;
  constructor() { }

  ngOnInit(): void {

    //GET USER INFO WITH LOCAL STORAGE
    let userToken = JSON.parse(`${localStorage.getItem('userToken')}`);
    if(userToken){
      this.userInfo = JSON.parse(`${localStorage?.getItem('userInfo')}`);
      console.log(this.userInfo);
    }
  }

}
