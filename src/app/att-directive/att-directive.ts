import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, Pipe, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  divClassName = signal<string>("");

  firstName: string = "John";
  courseName: string = "Angular 20 Tutorial";

  rollNoList = [11,12,13,14,15,16,17,18,19,20];

  isDiv2Green: boolean = false;

  currentDate: Date = new Date();

  studentObj : any = {
    firstName: "John",
    lastName: "Doe",
    rollNo: 123456,
    courseName: "Angular 20 Tutorial",
  }

  constructor () {
    // this.divClassName.set("red");
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    // to trigger api calls
    // to subscribe
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    // to deal with viewChild
    // to subscribe
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");

    // unsubscribe
    // restrict use from navigating

  }

  setBgClass(className: string) {
    this.divClassName.set(className)
  }
  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }

}
