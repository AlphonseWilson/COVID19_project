import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path: "", redirectTo: '/home', pathMatch:'full'},
  {path: "home", component:UserListComponent},
  {path:"register", component:RegisterUserComponent},
  {path: "edit/:id", component: UserDetailsComponent}
]



@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
