import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Application de gestion de devoirs';
  nomProf = 'Michel Buffa';
  x = 3;
  opened = false;

  drawer: any;

  doSomething() {
    // Charge la page "/list-devoirs"
    console.log("doSomething");
    //this.router.navigate(['/list-devoirs']);
  }

}

