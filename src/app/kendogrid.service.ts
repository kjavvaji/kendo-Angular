import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KendogridService {

  constructor(private http: HttpClient) { }

  getValues()
  {
    return this.http.get('http://192.168.2.28:8080/products');
  }
}
