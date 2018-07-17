import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../value-objects/search-result';
import { ViewTaskService } from './view-task.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  message: string;
  msg: string;
  constructor(private service: ViewTaskService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.message = params['message'];
    });
    if (null === this.message) {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }

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
  disableEdit(i) {
    if (this.results[i].endTask === 1) {
      return true;
    } else {
      return false;
    }
  }
  edit(i) {
    console.log(this.results[i]);
    this.router.navigate(['/update', {
      id: this.results[i].id,
      task: this.results[i].task,
      priority: this.results[i].priority,
      startDate: this.results[i].startDate,
      endDate: this.results[i].endDate,
      parentTask: this.results[i].parentTask
    }]);

  }

  endTask(i) {
    this.service.endTask(this.results[i].id).subscribe(data => this.msg);
    this.results[i].endTask = 1;
  }
}
