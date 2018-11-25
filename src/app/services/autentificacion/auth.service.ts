import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { user } from '../../models/user';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<user>;
  userDoc: AngularFirestoreDocument<user>;

  constructor(private router: Router, private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.user = this.afAuth.authState.pipe(
      // tslint:disable-next-line:no-shadowed-variable
      switchMap(user => {
        if (user) {
          return this.afs.doc<user>(`Users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  facebookLogin() {
    const provider = new auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  register(email: string, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(credentials => {
      this.updateUserData(credentials.user);
      this.router.navigate(['/menu']);
    }).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  logIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(credentials => {
      this.router.navigate(['/menu']);
    }).catch(err => {
      alert(err.message);
    });
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
        this.router.navigate(['/menu']);
      });
  }


  // tslint:disable-next-line:no-shadowed-variable
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Users/${user.uid}`);
    const data: user = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      photoURL: user.photoURL,
      role: {
        subscriber: true,
        admin: false,
      },
      carrito: {comida: [], monto: 0, date: null},
      ordenes: [],
    };
    return userRef.set(data, {merge: true});
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['']);
    });
  }

  // tslint:disable-next-line:no-shadowed-variable
  cambiarClave(user: user) {
    this.afAuth.auth.sendPasswordResetEmail(user.email).then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
  }

  // tslint:disable-next-line:no-shadowed-variable
  private checkAuthorization(user: user, allowedRoles: string[]): boolean {
    if (!user) { return false; }
    for (const role of allowedRoles) {
      if ( user.role[role] ) {
        return true;
      }
    }
    return false;
  }

  // tslint:disable-next-line:no-shadowed-variable
  canRead(user: user): boolean {
    const allowed = ['subscriber'];
    return this.checkAuthorization(user, allowed);
  }
  // tslint:disable-next-line:no-shadowed-variable
  canEdit(user: user): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }
  // tslint:disable-next-line:no-shadowed-variable
  canDelete(user: user): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }
  // tslint:disable-next-line:no-shadowed-variable
  updateUser(user: user) {
    this.userDoc = this.afs.doc(`Users/${user.uid}`);
    this.userDoc.update(user);
  }
  // tslint:disable-next-line:no-shadowed-variable
  add2User(user: user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`Users/${user.uid}`);
    const data: user = {
      uid: user.uid,
      email: user.email,
      name: user.name,
      photoURL: 'https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg',
      role: {
        subscriber: true,
      },
      carrito: {comida: [], monto: 0, date: null},
      ordenes: [],
    };
    return userRef.set(data, {merge: true});
  }
}


