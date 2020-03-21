import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
user:User = new User(1, "shyamuu", "password", true);
userId:Number;
  constructor( private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //this.user;
  }
  getUserById(){
    this.userId = +this.route.snapshot.paramMap.get("id");
  }
  onSubmit(){
    this.router.navigate(["/home"]);

  }
  

}
