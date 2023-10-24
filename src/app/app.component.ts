import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon application Angular sur les assignments !';
  nomProf = 'Michel Buffa';
  x = 3;
  opened = true;

  drawer: any;

  constructor(private authService:AuthService, private router:Router) {}

  login() { 
    if(!this.authService.loggedIn) {
      this.authService.logIn();
    } else {
      this.authService.logOut();
      this.router.navigate(['/home']);
    }
  }

  doSomething() {
    // Charge la page "/list-devoirs"
    console.log("doSomething");
    //this.router.navigate(['/list-devoirs']);
  }

}

