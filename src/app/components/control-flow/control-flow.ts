import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isParaVisible = false;

  startMonthName : string = "feb";

  citiList : string[] = ["Pune", "Mumbia", "Panji", "Nagpur"];

  studentList : any[] = [
    {name: 'AAAA', city:'Pune', isActive:false},
    {name: 'BB', city:'Mumbia', isActive:false},
    {name: 'CCC', city:'Pune', isActive:true},
    {name: 'DDD', city:'Nagpur', isActive:false},
  ]

  showP() {
    this.isParaVisible = true;
  }

  hideP() {
    this.isParaVisible = false;
  }

}
