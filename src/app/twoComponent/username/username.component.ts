import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent implements OnInit {
  users: any[] = [];
  addUsername!: string;
  addPassword!: string;
  searchUser!: string;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users = this.serviceService.getUsers();
  }

  add() {
    this.serviceService.addUser(this.addUsername, this.addPassword);
    this.addUsername = '';
    this.addPassword = '';
  }

  search(searchUser: string) {
    this.serviceService.search(searchUser);
    this.searchUser = '';
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
