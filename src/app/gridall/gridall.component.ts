import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import {customers} from './customers';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import {HttpClient} from '@angular/common/http';
import { KendogridService } from '../kendogrid.service';

@Component({
  selector: 'app-gridall',
  templateUrl: './gridall.component.html',
  styleUrls: ['./gridall.component.css']
})
export class GridallComponent implements OnInit {
  public multiple = false;
  public allowUnsort = true;
  public sort: SortDescriptor[] = [{
    field: 'Id',
    dir: 'asc'
  }];
  // constructor() { }
  public gridData : any;
  ngOnInit() {
    this.service.getValues().subscribe(
      (result) => {
          console.log(JSON.stringify(result));
          this.gridData = result;
      },
      err => {
        console.log("error", err);
      },
      () =>
      {
        this.loadItems();
      }
  )
   
  }

  public gridView: GridDataResult;
  public pageSize = 5;
  public skip = 0;
  private data: Object[];

  private items: any;

  constructor(private http: HttpClient, private service: KendogridService) {
  }

  public pageChange(event: PageChangeEvent): void {
      this.skip = event.skip;
      this.loadItems();
  }
  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadItems();
}

  private loadItems(): void {
    this.items=this.gridData;
    console.log(this.items);
    console.log(this.gridData);

      this.gridView = {
          data: orderBy(this.items.slice(this.skip, this.skip + this.pageSize), this.sort),
          total: this.items.length
      
      };
  }


}