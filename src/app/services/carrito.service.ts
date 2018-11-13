import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { AuthService } from './auth.service';
import { comida } from '../model/comida';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private auth: AuthService) {
  }
  // tslint:disable-next-line:no-shadowed-variable
  add2Cart(user: user , comida: comida) {
    user.carrito.push(comida);
    user.totalPagar += comida.price;
    this.auth.updateUser(user);
  }
}
