import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '../value-objects/response';
import { RequestOptions } from '@angular/http';
import { SearchResult } from '../value-objects/search-result';
import { SearchParam } from '../value-objects/search-param';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Options } from 'selenium-webdriver/chrome';
import { environment } from '../../environments/environment';

@Injectable()
export class ViewTaskService {
  constructor(private http: HttpClient) { }
  viewTask(searchParam: SearchParam): Observable<SearchResult[]> {
    console.log('Inside view service' + searchParam.task);
    return this.http.post<SearchResult[]>(environment.apiUrl + '/viewTask', searchParam);
  }

  endTask(taskId: Number) {
    const httpParams = new HttpParams().set('taskId', taskId.toString());
    return this.http.get<string>(environment.apiUrl + '/endTask', { params: httpParams });
  }
}
