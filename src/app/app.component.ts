import { Component } from '@angular/core';

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

  doSomething() {
    // Charge la page "/list-devoirs"
    console.log("doSomething");
    //this.router.navigate(['/list-devoirs']);
  }

}

