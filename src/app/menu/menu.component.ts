import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/autentificacion/auth.service';
import { user } from '../models/user';
import { ComidaComponent } from '../tools/comida/comida.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {
  modo = false; // false;
  mostrar = false;
  searchterm: string;
  @ViewChild(ComidaComponent) comida;
  constructor(public auth: AuthService, private router: Router) { }
  ngAfterViewInit() {
  }
  menu() {
    this.router.navigate(['/menu']);
  }
  orden() {
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
