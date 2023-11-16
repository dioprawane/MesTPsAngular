import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mon application Angular sur les assignments !';
  nomProf = 'Michel Buffa';
  x = 3;
  opened = true;

  drawer: any;

  constructor(private authService:AuthService, private router: Router) {}

  currentUser: any = null;

  afficheMessage: boolean = false;

  ngOnInit() {
    this.authService.userObservable$.subscribe(user => {
      this.currentUser = user;
    });
    console.log("currentUser de app.components : ", this.currentUser);
  }


  /*onUser () {
    this.currentUser = this.authService.getCurrentUser();
    console.log("currentUser de app.components : ", this.currentUser);
  }*/

  /*login() { 
    if(this.authService.isLogged() && this.authService.isAdmin()) {
      this.authService.isAdmin();
    } else if (this.authService.isLogged() && !this.authService.isAdmin()) {
      !this.authService.isAdmin();
      this.authService.logOut();
      this.router.navigate(['/home']);
    } else {
      // L'utilisateur n'est pas connecté
      console.log("Vous n'êtes pas connecté !");
      alert("Vous devez vous connecter pour accéder à cette page.\nIdentifiants de connexion :\n- Admin : login : admin, mot de passe : passwordAdmin\n- User : login : user1, mot de passe : password1");
      this.router.navigate(['/login']);
    }
  }*/

  doSomething() {
    // Charge la page "/list-devoirs"
    console.log("doSomething");
    //this.router.navigate(['/list-devoirs']);
  }

  navigateTo(route: string) {
    if(this.currentUser!=null) {
      this.router.navigate([route]);
      this.afficheMessage = false;
    } else {
      this.router.navigate(['/home']);
      this.afficheMessage = true;
    }
  }

  logOut() {
    this.authService.logOut();
    this.currentUser = null;
    this.router.navigate(['/login']); // Redirigez vers la page d'accueil après la déconnexion.
  }

  // Cette méthode détermine si l'URL actuelle est la page d'accueil
  isHomePage(): boolean {
    return this.router.url === '/';
  }
  

}

