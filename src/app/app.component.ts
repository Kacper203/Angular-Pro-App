import { Component } from '@angular/core';
import { User } from './auth-form/auth-form.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

remeberMe: boolean = false;

rememberUser(remeber: boolean) {
  this.remeberMe = remeber;
}


 createUser(user: User){
   console.log("Create account", user)
 }
loginUser(user: User) {
  console.log("Login", user);
}

}

