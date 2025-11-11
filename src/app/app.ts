import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { ControlFlow } from './components/control-flow/control-flow';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, User, DataBinding, SignalEx, ControlFlow, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-v20-tutorial-01');

  // loggedUserName: string = "";

  // constructor(private masterService: Master) {
  //   this.readLoggedData();
  //   this.masterService.onLogin.subscribe(res => {
  //     this.readLoggedData();
  //     // if (res) {
  //     //   this.loggedUserName = "Admin";
  //     // }
  //   })

  // }

  // readLoggedData() {
  //   const loggedData = localStorage.getItem("angular20User");
  //   if (loggedData !== null) {
  //     this.loggedUserName = loggedData;
  //   }
  // }

  // onLogOff() {
  //   localStorage.removeItem("angular20User");
  //   this.readLoggedData();
  //   this.loggedUserName = "";
  // }
}
