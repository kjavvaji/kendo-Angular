import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public listItems: Array<string> = ['Baseball', 'Basketball', 'Cricket', 'Field Hockey', 'Football', 'Table Tennis', 'Tennis', 'Volleyball'];
    public value: any = ['Baseball']

}
