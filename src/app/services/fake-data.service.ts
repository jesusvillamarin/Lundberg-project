import { IComments } from './../shared/models/comments';
import { IUser } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPosts } from '../shared/models/posts';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  private URL_API: string;

  constructor(private http: HttpClient) {
    this.URL_API = 'https://jsonplaceholder.typicode.com';
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.URL_API + '/users');
  }

  getPosts(userId: any): Observable<IPosts[]>{
    return this.http.get<IPosts[]>(this.URL_API + `/posts?userId=${userId}`);
  }

  getComments(postId: any) : Observable<IComments[]>{
    return this.http.get<IComments[]>(this.URL_API + `/comments?postId=${postId}`);
  }
}
