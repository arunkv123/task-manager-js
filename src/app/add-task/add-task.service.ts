import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '../value-objects/response';
import { RequestOptions } from '@angular/http';
import { TaskDetails } from '../value-objects/task-details';
import { Observable } from 'rxjs';

import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../../environments/environment';

@Injectable()
export class AddTaskService {
  constructor(private http: HttpClient) {}
  addTask(taskDetails: TaskDetails): Observable<Response> {
    console.log('Inside service' + taskDetails.task);
    return this.http.post<Response>(environment.apiUrl + '/addTask', taskDetails );
  }
}
