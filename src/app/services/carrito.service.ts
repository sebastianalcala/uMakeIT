import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { AuthService } from './auth.service';
import { comida } from '../model/comida';
import { Router } from '@angular/router';


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
  deleteExtra(event, user: user , indexExtra: number, index: number) {
    if (indexExtra !== -1) {
      user.carrito.comida[index].extras.splice(indexExtra, 1);
    }
    this.auth.updateUser(user);
  }
  // tslint:disable-next-line:no-shadowed-variable
  guardarOrden(event, user: user) {
    user.ordenes.push(user.carrito);
    this.auth.updateUser(user);
    user.carrito = {comida: [], monto: 0, date: null};
    this.auth.updateUser(user);
  }
  // tslint:disable-next-line:no-shadowed-variable
  ordenarCompra(event, user: user, orden) {
    user.carrito = orden;
    this.auth.updateUser(user);
    this.router.navigate(['/orden']);
  }
}
