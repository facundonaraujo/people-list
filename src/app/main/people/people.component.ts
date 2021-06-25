import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  showGrid: boolean = true;
  showList: boolean = false;

  constructor() { }

  ngOnInit() {}

  listView(){
    this.showGrid = false;
    this.showList = true;
  }

  gridView(){
    this.showGrid = true;
    this.showList = false;
  }

}
