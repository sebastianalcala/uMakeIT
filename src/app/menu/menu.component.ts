import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { user } from '../model/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  modo = false; // false;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
  comprar() {
    this.router.navigate(['/orden']);
  }
  compras() {
    // this.router.navigate(['/compras']);
  }
  toggleModo() {
    this.modo = !this.modo;
  }
  // tslint:disable-next-line:no-shadowed-variable
  cambiarClave(user: user) {
    this.auth.cambiarClave(user);
  }
}
