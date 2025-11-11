import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe,
    JsonPipe, NaPipe
  ],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css',
})
export class PipeEx {
  courseName = "Angular";

  courseDuration = "DURATION IS 3 mONTH";

  courseDate : Date = new Date();

  rollNoList : number[] = [1,2,3,4,5,6,7,8,9,10];

  studentObj : any = {
    name : "John Doe",
    mobile: "9876543210",
    address: {
      city: "Bangalore",
      state: "",
    }
   
  }

}
