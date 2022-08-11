import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  users: any[] = ['aaa', 'bbb', 'ccc'];

  constructor() {}

  getUsers() {
    return this.users;
  }

  addUser(userName: object) {
    this.users.push(userName);
  }
}
