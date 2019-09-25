import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import {customers} from './customers';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';


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

  ngOnInit() {
  }

  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;
  private data: Object[];

  private items: any[] = customers;

  constructor() {
      this.loadItems();
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
      this.gridView = {
          data: orderBy(this.items.slice(this.skip, this.skip + this.pageSize), this.sort),
          total: this.items.length
      
      };
  }


}
