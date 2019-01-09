import { IUser } from "./../models/user";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  private URL_API: string;

  constructor(private http: HttpClient) {
    this.URL_API = 'https://jsonplaceholder.typicode.com';
  }

  getData(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.URL_API + '/users');
  }
}
