import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements AfterViewInit {
  
   toppings = new FormControl();
  public toppingList = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
  public toppingList1 = this.toppingList.slice();

  langs:any[]=[
    {
      value:'EN-0',viewValue:'EN'
    },
    {
      value:'FR-1',viewValue:'FR'
    },
    {
      value:'AR-2',viewValue:'AR'
    }
  ];
  
  displayedColumns: string[] = ['position', 'name', 'role', 'userSince', 'email','status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

   @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}

export interface PeriodicElement {
  name: string;
  position: number;
  userSince: string;
  email: string;
  status:string;
  role:string;
  icon:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'user name', role:"",userSince: '2021-3-17', email: 'email@example.com', status:"active", icon:'account_circle'},
  {position: 2, name: 'user name', role:"",userSince: '2021-3-17', email: 'email@example.com', status:"active", icon:'account_circle'},
  {position: 3, name: 'user name', role:"",userSince: '2021-3-17', email: 'email@example.com', status:"active", icon:'account_circle'},
  {position: 4, name: 'user name', role:"",userSince: '2021-3-17', email: 'email@example.com', status:"active", icon:'account_circle'},
  {position: 5, name: 'user name', role:"",userSince: '2021-3-17', email: 'email@example.com', status:"active", icon:'account_circle'},
  {position: 6, name: 'user name', role:"",userSince: '2021-3-17', email: 'email@example.com', status:"active", icon:'account_circle'},
  {position: 7, name: 'user name', role:"",userSince: '2021-3-17', email: 'email@example.com', status:"active", icon:'account_circle'},
  {position: 8, name: 'user name', role:"",userSince: '2021-3-17', email: 'email@example.com', status:"active", icon:'account_circle'},
  {position: 9, name: 'user name', role:"",userSince: '2021-3-17', email: 'email@example.com', status:"active", icon:'account_circle'},
  {position: 10, name: 'user name', role:"",userSince: '2021-3-17', email: 'email@example.com', status:"active", icon:'account_circle'},
];

