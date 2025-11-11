import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  loginObj: any = {
    userName: "",
    password: ""
  }

  router = inject(Router);
  masterService = inject(Master);

  onLogin() {
    debugger
   if(this.loginObj.userName == 'Admin' && this.loginObj.password == '112233') {
    this.router.navigateByUrl("/admin");
    localStorage.setItem("angular20User", 'Admin');
    this.masterService.onLogin.next(true);
    //  alert("Login Successful");
   } else {
     alert("Invalid Credentials");
   }
  }


}

