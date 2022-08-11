import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent implements OnInit {
  users: any[] = [];
  addUser!: object;
  isSaveShow: boolean = false;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.users = this.serviceService.getUsers();
    console.log(this.users);
  }

  add() {
    this.isSaveShow = true;
  }

  save() {
    this.serviceService.addUser(this.addUser);
    this.isSaveShow = false;
  }

  cancel() {
    this.isSaveShow = false;
  }
}
