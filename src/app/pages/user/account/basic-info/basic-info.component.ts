import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditBasicInfoComponent } from 'src/app/shared/dialog-view/edit-basic-info/edit-basic-info.component';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {
  userInfo:any;
  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    let userToken = JSON.parse(`${localStorage.getItem('userToken')}`);
    if(userToken){
      this.userInfo = JSON.parse(`${localStorage?.getItem('userInfo')}`);
      console.log(this.userInfo);
    }
  }

  openNewDialog() {
    this.dialog.open(EditBasicInfoComponent, {
      panelClass: ['theme-dialog'],
      autoFocus: false,
      disableClose: false
    });
  }

}
