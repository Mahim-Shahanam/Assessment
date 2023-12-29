import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
//import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import {Sort, MatSortModule, MatSort} from '@angular/material/sort';
//import { MatIconModule } from '@angular/material/icon';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';


export interface PeriodicElement {
  symbol: string;
  ltp: string;
  open: string;
}


@Component({
  selector: 'app-fintech-as',
  templateUrl: './fintech-as.component.html',
  styleUrls: ['./fintech-as.component.css'],
  
  
})
export class FintechAsComponent implements OnInit{

  tooltipText = 'This is a custom tooltip';
  public getApi1: any;
  public getApi2: any;
  public displayedColumns: any =['symbol','ltp','open'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  apires1: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort
  
  //public dataSource: any =[];
  constructor(
    private http: HttpClient,
   // private paginator: MatPaginator
    ){}
    

    ngOnInit(): void {
      this.getMethod1();
      this.getMethod2();
      this.dataSource.paginator = this.paginator;
  
    }
    
    
    public getMethod1(){
      this.http.get('https://intradayscreener.com/api/openhighlow/cash').subscribe((data1)=>{
        console.table(data1,);
        this.apires1 =data1;
          this.dataSource = new MatTableDataSource<any>(this.apires1);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort= this.sort;
        this.getApi1=data1;
       // this.dataSource= data1;
      });
    }

    public getMethod2(){
      this.http.get('https://intradayscreener.com/api/allQuotesCompact/?isPivots=true').subscribe((data2)=>{
        console.table(data2,);
        this.getApi2=data2;
        //this.dataSource=data2;
      });
    }
    
}
