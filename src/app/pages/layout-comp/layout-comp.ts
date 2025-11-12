import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-comp',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-comp.html',
  styleUrl: './layout-comp.css',
})
export class LayoutComp {


  router = inject(Router);

  onLogOff(){
    this.router.navigate(["/login-com"])
  }

}
