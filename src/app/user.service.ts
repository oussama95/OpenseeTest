import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDo } from './task';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = "https://jsonplaceholder.typicode.com/users";
  private toDoUrl = "https://jsonplaceholder.typicode.com/todos";
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
  getToDo(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.toDoUrl);
  }
  constructor(private http:HttpClient) { }
}
