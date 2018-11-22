import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/autentificacion/auth.service';
import { user } from '../models/user';
import { SearchService } from '../services/search/search.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  modo = false; // false;
  mostrar = false;
  constructor(public auth: AuthService, private router: Router, public ss: SearchService) { }

  ngOnInit() {
  }
  comprar() {
    this.router.navigate(['/orden']);
  }
  compras() {
    this.router.navigate(['/compras']);
  }
  toggleModo() {
    this.modo = !this.modo;
  }
  // tslint:disable-next-line:no-shadowed-variable
  mostrarRegister2(user: user) {
    if (user.name == null || user.name === '') {
      return this.mostrar = true;
    }
    return this.mostrar = false;
  }
}
