import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FintechAsComponent } from './fintech-as/fintech-as.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
//import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {Sort, MatSortModule} from '@angular/material/sort';
import { ToolTipDirective } from './tool-tip.directive';
import { MatIconModule } from '@angular/material/icon';
import { MyTooltipDirective } from './my-tooltip.directive';
import {MatTooltipModule} from '@angular/material/tooltip';




@NgModule({
  declarations: [
    AppComponent,
    FintechAsComponent,
    ToolTipDirective,
    MyTooltipDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,CdkTableModule,MatTableModule,HttpClientModule,MatPaginatorModule,MatSortModule,MatIconModule,MatTooltipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
