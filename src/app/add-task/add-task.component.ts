import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Options } from 'ng5-slider';
import { DatePipe } from '@angular/common';
import { AddTaskService } from './add-task.service';
import { Response } from '../value-objects/response';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [AddTaskService, DatePipe]
})
export class AddTaskComponent implements OnInit {
  myTask: FormGroup;
  msg: String;
  pipe = new DatePipe('en-US');
  constructor(private service: AddTaskService) { }

  ngOnInit() {
    this.myTask = new FormGroup({
      'add': new FormGroup({
        'task': new FormControl('', [Validators.required]),
        'priority': new FormControl('5', [Validators.required]),
        'parent': new FormControl('', []),
        'startDate': new FormControl(this.pipe.transform(Date.now(), 'MM/dd/yyyy'), [Validators.required]),
        'endDate': new FormControl(this.pipe.transform(Date.now(), 'MM/dd/yyyy'), [Validators.required])
      })
    });
  }
  onSubmit() {
    console.log(this.myTask);
    console.log(this.myTask.value);
    this.service.addTask({
      task: this.myTask.value.add.task,
      parentTask: this.myTask.value.add.parentTask,
      startDate: this.myTask.value.add.startDate,
      priority: this.myTask.value.add.priority,
      endDate: this.myTask.value.add.endDate
    })
      .subscribe(data => { this.showMessage(data.status, data.message); });
  }
  showMessage(status: boolean, message: string) {
    this.msg = message;


  }
}
