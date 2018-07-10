import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '../value-objects/response';
import { RequestOptions } from '@angular/http';
import { TaskDetails } from '../value-objects/task-details';
import { Observable } from 'rxjs';

import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../../environments/environment';

@Injectable()
export class EditTaskService {
    constructor(private http: HttpClient) { }
    editTask(taskDetails: TaskDetails): Observable<string> {
        console.log('Update service');
        return this.http.post<string>(environment.apiUrl + '/updateTask', taskDetails);
    }
}
