import { Injectable } from '@angular/core';
import { user } from '../../models/user';
import { AuthService } from '../autentificacion/auth.service';
import { comida } from '../../models/comida';
import { Router } from '@angular/router';
import {formatDate } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  constructor(private auth: AuthService, private router: Router) {
  }
  // tslint:disable-next-line:no-shadowed-variable
  add2Cart(event, user: user , comida: comida) {
    user.carrito.comida.push(comida);
    user.carrito.monto += comida.price;
    this.auth.updateUser(user);
  }
  // tslint:disable-next-line:no-shadowed-variable
  removeFromCart(event, user: user , comida: comida, index: number) {
    if (index !== -1) {
      user.carrito.comida.splice(index, 1);
    }
    user.carrito.monto -= comida.price;
    this.auth.updateUser(user);
  }
  // tslint:disable-next-line:no-shadowed-variable
  deleteExtra(event, user: user , index: number, indexExtra: number) {
    if (index !== -1) {
      user.carrito.comida[index].extras.splice(indexExtra , 1);
    }
    this.auth.updateUser(user);
  }
  // tslint:disable-next-line:no-shadowed-variable
  agregarExtra(user: user , index: number, extra) {
    console.log (user);
    console.log (index);
    console.log (extra);
    // user.carrito.comida[index].extras.push(extra);
    // this.auth.updateUser(user);
  }
  // tslint:disable-next-line:no-shadowed-variable
  guardarOrden(user: user) {
    const date = new Date();
    user.carrito.date = formatDate(date, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    user.carrito.entregado = false;
    user.ordenes.push(user.carrito);
    this.auth.updateUser(user);
    user.carrito = {comida: [], monto: 0, date: null };
    this.auth.updateUser(user);
  }
  // tslint:disable-next-line:no-shadowed-variable
  ordenarCompra(event, user: user, orden) {
    user.carrito = orden;
    this.auth.updateUser(user);
    this.router.navigate(['/orden']);
  }
}
