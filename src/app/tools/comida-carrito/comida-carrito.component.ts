import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { user } from 'src/app/model/user';
import { comida } from 'src/app/model/comida';

@Component({
  selector: 'app-comida-carrito',
  templateUrl: './comida-carrito.component.html',
  styleUrls: ['./comida-carrito.component.scss']
})
export class ComidaCarritoComponent implements OnInit {
  @Input() c;
  @Input() i;
  constructor(public auth: AuthService) {}
  ngOnInit() {
  }
  // tslint:disable-next-line:no-shadowed-variable
  deleteComida(event, comida: comida , user: user) {
    const index = this.i;
    if (index !== -1) {
      user.carrito.splice(index, 1);
    }
    user.totalPagar -= comida.price;
    this.auth.updateUser(user);
  }
    // tslint:disable-next-line:no-shadowed-variable
    eliminarExtra(event, comida: comida , user: user , ie) {
      const index = ie;
      if (index !== -1) {
        user.carrito[this.i].extras.splice(index, 1);
      }
      this.auth.updateUser(user);
    }
}
