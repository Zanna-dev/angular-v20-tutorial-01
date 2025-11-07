import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  userList: any[] = [];
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }


  http = inject(HttpClient);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.userList = res;
    });
  }

  // onSaveUser() {
  //   this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe((Result: any) => {
  //    alert("User Registered Successfully");
  //    this.getUsers();
  // }, error => {

  // })}

  onSaveUser() {
    debugger
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
      next: () => {
        alert("User Registered Successfully");
        this.getUsers();
      },
      error: (error) => {
        alert("Error Occured" + error);
      }
    }
    )
  }

}
