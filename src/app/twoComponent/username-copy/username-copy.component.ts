import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-username-copy',
  templateUrl: './username-copy.component.html',
  styleUrls: ['./username-copy.component.scss'],
})
export class UsernameCopyComponent implements OnInit {
  users: any[] = [];
  search: any[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.getUser();
    this.getSearchUser();
  }

  getUser() {
    this.users = this.serviceService.getUsers();
  }

  getSearchUser() {
    this.search = this.serviceService.getSearchUser();
  }
}
