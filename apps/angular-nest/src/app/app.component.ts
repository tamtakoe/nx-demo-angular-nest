import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular-nest/api-interfaces';
import { ApiResource } from './api-resource';

@Component({
  selector: 'angular-nest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // hello$ = this.http.get<Message>('/api/hello');
  users: any[] = [];

  constructor(private http: HttpClient, private apiResource: ApiResource) {

  }

  // ngOnInit() {
  //   this.loadUsers();
  // }

  loadUsers() {
    this.apiResource.query().then((users: any[]) => {
      this.users = users;
      console.log('USERS', users);
    });
  }
}
