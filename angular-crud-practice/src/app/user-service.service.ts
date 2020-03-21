import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl:string = "https://angular-crud-app-cb5d5.firebaseio.com"

  constructor(private http:HttpClient) { }

  //create a user
  signUpUser(user:User){
    return this.http.post<string>(`${this.baseUrl}`, user);
  }

  //read all users
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  //update users information
  updateUser(id:string, user:User){
    return this.http.put<string>(`${this.baseUrl}/edituser/${id}`, user);
  }

  //delete users
  deleteUser(id:string){
    return this.http.delete<string>(`${this.baseUrl}/deleteuser/${id}`);
  }

}
