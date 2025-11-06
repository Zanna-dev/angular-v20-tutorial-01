import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {

  firstName: string = "Cheatan";

  productName = "Moto"

  courseName = signal<string>('Angular');

  courseDuration = signal("15 Vidoes")

  courseDetails = computed(() => this.courseName() + "-" + this.courseDuration)

  construction() {
    this.firstName = "Rahul";
    console.log(this.firstName);

    console.log(this.courseName());

    setTimeout(() => {
      this.courseName.set("React")
    }, 5000);

    // this.courseName.set("React")
    console.log(this.courseName());
  }

}
