import { Component, inject } from '@angular/core';
import { Master } from '../../services/master';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  loggedUserName: string = "";
  router = inject(Router);

  constructor(private masterService: Master) {
    this.readLoggedData();
    this.masterService.onLogin.subscribe(res => {
      this.readLoggedData();
      // if (res) {
      //   this.loggedUserName = "Admin";
      // }
    })

  }

  readLoggedData() {
    const loggedData = localStorage.getItem("angular20User");
    if (loggedData !== null) {
      this.loggedUserName = loggedData;
    }
  }

  onLogOff() {
    localStorage.removeItem("angular20User");
    this.readLoggedData();
    this.loggedUserName = "";
    this.router.navigateByUrl("/login");
  }

}
