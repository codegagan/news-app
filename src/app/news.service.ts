import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import {News} from './News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  protected httpHeaders: HttpHeaders;

  newsUrl: string = environment.url + '/news';


  constructor(protected http: HttpClient) {
      this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      // .set('x-codegagan', 'gagan');
  }

  getAll(): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl, {headers: this.httpHeaders});
  }


}
