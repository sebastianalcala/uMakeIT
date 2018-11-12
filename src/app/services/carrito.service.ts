import { Injectable } from '@angular/core';
import { Carrito } from '../model/carrito';
import { user } from '../model/user';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private auth: AuthService) {
  }
  // tslint:disable-next-line:no-shadowed-variable
  add2Cart(user: user , comida) {
    user.carrito.push(comida);
    this.auth.updateUser(user);
  }
}
