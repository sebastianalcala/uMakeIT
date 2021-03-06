import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/autentificacion/auth.service';
import { user } from '../models/user';
import { CarritoService } from '../services/carrito/carrito.service';

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
  orden() {
    this.router.navigate(['/orden']);
  }
}
