import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cast, Tv} from '../types';

@Injectable({
  providedIn: 'root'
})
export class CastService {
  constructor(private httpClient: HttpClient) { }
  getCasts(TvID: string): Observable<Cast[]> {
    return this.httpClient.get<Cast[]>(API + TvID + '/cast');
  }
}
const API = 'http://api.tvmaze.com/shows/';

