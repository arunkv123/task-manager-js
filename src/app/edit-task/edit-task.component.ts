import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchResult } from '../value-objects/search-result';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EditTaskService } from './edit-task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers: [EditTaskService, DatePipe]
})
export class EditTaskComponent implements OnInit {
  edit: FormGroup;
  task: string;
  id: Number;
  parentTask: string;
  priority: Number;
  startDate: Date;
  endDate: Date;
  msg: string;
  pipe = new DatePipe('en-US');
  constructor(private service: EditTaskService, private router: Router, private route: ActivatedRoute) {
    console.log(this.route);
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.task = params['task'];
      this.priority = params['priority'];
      this.startDate = params['startDate'];
      this.endDate = params['endDate'];
      this.parentTask = params['parentTask'];
    });
  }

  ngOnInit() {
    this.edit = new FormGroup({
      'edit': new FormGroup({
        'task': new FormControl(this.task, [Validators.required]),
        'priority': new FormControl(this.priority, [Validators.required]),
        'parent': new FormControl(this.parentTask, []),
        'startDate': new FormControl(this.pipe.transform(this.startDate, 'MM/dd/yyyy'), [Validators.required]),
        'endDate': new FormControl(this.pipe.transform(this.endDate, 'MM/dd/yyyy'), [Validators.required])
      })
    });
  }

  update() {
    console.log('Update');
    this.service.editTask({
      id: this.id,
      task: this.edit.value.edit.task,
      parentTask: this.edit.value.edit.parentTask,
      startDate: this.edit.value.edit.startDate,
      priority: this.edit.value.edit.priority,
      endDate: this.edit.value.edit.endDate
    }).subscribe(data => this.msg);
    this.router.navigate(['/view', {message: this.msg}]);
  }
}
