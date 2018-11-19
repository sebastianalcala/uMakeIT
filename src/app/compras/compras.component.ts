import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { user } from '../model/user';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  constructor(public router: Router, public auth: AuthService , public cs: CarritoService) { }

  ngOnInit() {
  }
  menu() {
    this.router.navigate(['/menu']);
  }
  compras() {
    this.router.navigate(['/compras']);
  }
  comprar() {
    this.router.navigate(['/orden']);
  }
  // tslint:disable-next-line:no-shadowed-variable
  cambiarClave(user: user) {
    this.auth.cambiarClave(user);
  }
}
