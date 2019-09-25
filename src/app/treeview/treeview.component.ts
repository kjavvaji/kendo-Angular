import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public data: any[] = [
    {
        text: 'Furniture', items: [
            { text: 'Tables & Chairs' },
            { text: 'Sofas' },
            { text: 'Occasional Furniture' }
        ]
    },
    {
        text: 'Decor', items: [
            { text: 'Bed Linen' },
            { text: 'Curtains & Blinds' },
            { text: 'Carpets' }
        ]
    }
];

}
