import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../../environments/environment';

@Injectable()
export class AddTaskService {
  constructor(private http: HttpClient) {}
  addTask(proj:Project): Observable<ProjectEdit> {
    

    return this.http.post<ProjectEdit>(environment.apiUrl+"/project/updateProject",proj );
  }
}
