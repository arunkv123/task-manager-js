import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../value-objects/search-result';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  task: String;
  parentTask: String;
  priorityFrom: Number;
  priorityTo: Number;
  startDate: Date;
  endDate: Date;
  hide: boolean;
  results: SearchResult[];
  constructor() { }

  ngOnInit() {
    this.priorityFrom = 0;
    this.priorityTo = 30;
    this.startDate = new Date();
    this.endDate = new Date();

  }

  search() {
    this.hide = false;
    this.results = [
      { task: 'Test1', priority: 10, parentTask: '', startDate: new Date(), endDate: new Date() },
      { task: 'Test2', priority: 11, parentTask: 'Test1', startDate: new Date(), endDate: new Date() }
    ];
  }
}
