import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//for date range
  public range = { start: null, end: null };
//for date time picker
  public value: Date = new Date(2019, 5, 1, 22);
  public format: string = 'MM/dd/yyyy HH:mm';

}
