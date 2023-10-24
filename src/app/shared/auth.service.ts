import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any = null;

  users = [
    {login: 'user1', password: 'password1', role: 'user'},
    {login: 'admin', password: 'passwordAdmin', role: 'admin'}
  ];  

  constructor() { }

  loggedIn = false;

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  // renvoie une promesse qui, lorsuq'elle sera "résolved", renvoie si l'utilsiateur est admin ou pas
  // Pour le moment, renvoie true s'il est loggé..
  isAdmin() {
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn);
      }
    );
    return isUserAdmin;
  }


}
