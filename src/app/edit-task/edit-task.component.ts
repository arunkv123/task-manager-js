import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchResult } from '../value-objects/search-result';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers: [ DatePipe]
})
export class EditTaskComponent implements OnInit {
  edit: FormGroup;
  task: string;
  parentTask: string;
  priority: Number;
  startDate: Date;
  endDate: Date;
  pipe = new DatePipe('en-US');
  constructor(private router: Router, private route: ActivatedRoute) {
    console.log(this.route);
    this.route.params.subscribe(params => {
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

}
