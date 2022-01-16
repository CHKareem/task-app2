import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  
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
  position: string;
  userSince: string;
  email: string;
  status:string;
  role:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [

];


