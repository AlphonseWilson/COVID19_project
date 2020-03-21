import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[] = [new User(1,"shyamuu", "password", true)];

  constructor() { }

  ngOnInit() {
    this.users;
  }

}
