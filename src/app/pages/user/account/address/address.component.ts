import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewAddressComponent } from '../add-new-address/add-new-address.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(AddNewAddressComponent,{
      maxWidth:"450px",
      width:"100%",
      height:"auto"
    })
  }

}
