import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

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
  masterService = inject(Master);

  // constructor(private master: Master) {}

  ngOnInit(): void {
    this.getUsers();
    debugger;
    const result = this.masterService.getSum(12, 50);
    const appData = this.masterService.appName;
  }

  getUsers() {
    // this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
    //   this.userList = res;
    // });
    debugger
    this.masterService.getUsers().subscribe((res: any) => {
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

  onResetUser() {
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    }

  }

  onUpdateUser() {
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObj.userId, this.userObj).subscribe({
      next: () => {
        alert("User Updated Successfully");
        this.getUsers();
      },
      error: () => {
        alert("Error Occured");
      }
    })
  }

  onDeleteUser(id: any) {
    const isDeleted = confirm("Are you sure you want to delete this user?");
    if (isDeleted) {
      this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUser?id=" + id).subscribe({
        next: () => {
          alert("User Deleted Successfully");
          this.getUsers();
        },
        error: (error) => {
          alert("Error Occured" + error.error);
        }
      })
    }


  }

  onEdit(item: any) {
    this.userObj = item;
  }

}
