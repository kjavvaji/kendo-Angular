import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { KendogridService } from '../kendogrid.service';


@Component({
  selector: 'app-kendogrid',
  templateUrl: './kendogrid.component.html',
  styleUrls: ['./kendogrid.component.css']
})
export class KendogridComponent implements OnInit {

  constructor(private http: HttpClient, private service: KendogridService) { }
  public gridData : any;
  public received : any;
  
  ngOnInit() {
    this.service.getValues().subscribe(
        (result) => {
            console.log(JSON.stringify(result));
            this.gridData = result;
        }
    )
  }
  
  
  
//  public gridData: any[] = [
//     {
//       "ProductID": 1,
//       "ProductName": "Wheat - Food Item",
//       "SupplierID": 1,
//       "CategoryID": 1,
//       "QuantityPerUnit": "520 bags",
//       "UnitPrice": 5000.00,
//       "UnitsInStock": 480,
//       "UnitsOnOrder": 6594,
//       "ReorderLevel": 1,
//       "Discontinued": true,
//       "Category": {
//           "CategoryID": 1,
//           "Name": "Wheat Foods",
//           "Description": "Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. There are many species of wheat which together make up the genus Triticum; the most widely grown is common wheat"
//       }
//     }, {
//         "ProductID": 2,
//         "ProductName": "Rice  - Food Item",
//         "SupplierID": 1,
//         "CategoryID": 1,
//         "QuantityPerUnit": "500 bags",
//         "UnitPrice": 6000.00,
//         "UnitsInStock": 17,
//         "UnitsOnOrder": 2322,
//         "ReorderLevel": 2,
//         "Discontinued": false,
//         "Category": {
//             "CategoryID": 1,
//             "Name": "Rice Foods",
//             "Description": "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
//         }
//     },
//     {
//         "ProductID": 3,
//         "ProductName": "Rice  - Food Item",
//         "SupplierID": 1,
//         "CategoryID": 1,
//         "QuantityPerUnit": "500 bags",
//         "UnitPrice": 6000.00,
//         "UnitsInStock": 17,
//         "UnitsOnOrder": 2322,
//         "ReorderLevel": 2,
//         "Discontinued": false,
//         "Category": {
//             "CategoryID": 1,
//             "Name": "Rice Foods",
//             "Description": "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
//         }
//     },
//     {
//         "ProductID": 4,
//         "ProductName": "Rice  - Food Item",
//         "SupplierID": 1,
//         "CategoryID": 1,
//         "QuantityPerUnit": "500 bags",
//         "UnitPrice": 6000.00,
//         "UnitsInStock": 17,
//         "UnitsOnOrder": 2322,
//         "ReorderLevel": 2,
//         "Discontinued": false,
//         "Category": {
//             "CategoryID": 1,
//             "Name": "Rice Foods",
//             "Description": "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
//         }
//     },
//     {
//         "ProductID": 5,
//         "ProductName": "Rice  - Food Item",
//         "SupplierID": 1,
//         "CategoryID": 1,
//         "QuantityPerUnit": "500 bags",
//         "UnitPrice": 6000.00,
//         "UnitsInStock": 17,
//         "UnitsOnOrder": 2322,
//         "ReorderLevel": 2,
//         "Discontinued": false,
//         "Category": {
//             "CategoryID": 1,
//             "Name": "Rice Foods",
//             "Description": "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
//         }
//     },
//         {
//             "ProductID": 6,
//             "ProductName": "B.Rice  - Food Item",
//             "SupplierID": 1,
//             "CategoryID": 1,
//             "QuantityPerUnit": "500 bags",
//             "UnitPrice": 6000.00,
//             "UnitsInStock": 17,
//             "UnitsOnOrder": 2322,
//             "ReorderLevel": 2,
//             "Discontinued": false,
//             "Category": {
//                 "CategoryID": 1,
//                 "Name": "Rice Foods",
//                 "Description": "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
//             }
        
//     }];
}
