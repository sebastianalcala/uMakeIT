import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  logIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(credentials => {
      this.router.navigate(['/menu']);
    }).catch(err => {
      alert(err.message);
    });
  }
  register(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(credentials => {
    }).catch(err => {
      alert(err.message); });
  }
  signOut() {
    this.afAuth.auth.signOut().then(credentials => {
      this.router.navigate(['/']);
    });
  }
}


