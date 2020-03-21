import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user:User;
  register = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private router:Router) { }

  ngOnInit() {
  }
  getFormData(){
    return this.register.value;
  }
  onSubmit(){
    let username = this.getFormData().username;
    let password = this.getFormData().password;
    this.user = new User(2, username, password, true);
    //add to db
    this.register.reset();
    this.router.navigate(["/home"]);
  }

}
