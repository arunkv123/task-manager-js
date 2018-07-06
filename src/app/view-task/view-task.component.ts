import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../value-objects/search-result';
import { ViewTaskService } from './view-task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  providers: [ViewTaskService]
})
export class ViewTaskComponent implements OnInit {
  task: string;
  parentTask: string;
  priorityFrom: Number;
  priorityTo: Number;
  startDate: Date;
  endDate: Date;
  hide: boolean;
  result: SearchResult;
  results: SearchResult[];
  editRow: boolean[];
  constructor(private service: ViewTaskService, private router: Router) { }

  ngOnInit() {
    this.priorityFrom = 0;
    this.priorityTo = 30;
    this.startDate = new Date();
    this.endDate = new Date();

  }

  search() {
    this.hide = false;
    this.service.viewTask({
      task: this.task,
      parentTask: this.parentTask,
      priorityFrom: this.priorityFrom,
      priorityTo: this.priorityTo,
      startDate: this.startDate,
      endDate: this.endDate
    }).subscribe(data => { this.results = data; });
    console.log(this.results);
  }
  edit(i) {
    console.log(this.results[i]);
    this.router.navigate(['/update', {
      task: this.results[i].task,
      priority: this.results[i].priority,
      startDate: this.results[i].startDate,
      endDate: this.results[i].endDate,
      parentTask: this.results[i].parentTask
    }]);

  }
}
