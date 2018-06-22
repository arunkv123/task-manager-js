import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Options } from 'ng5-slider';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  myTask: FormGroup;
  pipe = new DatePipe('en-US');
  constructor() { }

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
  }
}
