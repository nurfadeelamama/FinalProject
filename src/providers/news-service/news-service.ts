import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { News } from '../../models/news';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/Observable/ErrorObservable';
import { catchError } from 'rxjs/operators';




@Injectable()
export class NewsServiceProvider {

  urlAPI = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=a4c5efde3d7947c6b686177aad7b57a4';


  constructor(public http: HttpClient) {
    
  }


getNews():Observable<News>{
  return this.http.get<News>(this.urlAPI).pipe(
    catchError(this.handleError)
  )

}
private handleError(error: HttpErrorResponse){
  return new ErrorObservable(error);
}

}