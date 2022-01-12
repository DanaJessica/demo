import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  users: any[] = [
    {
      username: 'aaa',
      password: '111',
    },
    {
      username: 'bbb',
      password: '222',
    },
    {
      username: 'ccc',
      password: '333',
    },
  ];
  searchUser: any[] = [];

  constructor() {}

  getUsers() {
    return this.users;
  }

  addUser(username: string, password: string) {
    let obj = {
      username: username,
      password: password,
    };
    this.users.push(obj);
  }

  search(username: string) {
    let info: string = '';
    let index = 0;
    for (let item of this.users) {
      if (item.username === username) {
        info = `${username}'s password is ${item.password}`;
        console.log(1111);
        break;
      }
      index++;
    }
    if (index == this.users.length) {
      info = `Sorry! Not find!`;
    }
    this.searchUser.push(info);
  }

  getSearchUser() {
    return this.searchUser;
  }
}
