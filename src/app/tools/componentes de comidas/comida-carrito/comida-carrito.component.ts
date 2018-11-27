import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/autentificacion/auth.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-comida-carrito',
  templateUrl: './comida-carrito.component.html',
  styleUrls: ['./comida-carrito.component.scss']
})
export class ComidaCarritoComponent implements OnInit {
  @Input() c;
  @Input() i;
  extra;
  constructor(public auth: AuthService, public cs: CarritoService) {}

  ngOnInit() {
    this.extra = this.c.extras[0];
  }
  deleteExtra(index, user) {
    user.carrito.comida[this.i].extrasSeleccionados.splice(index, 1);
    this.auth.updateUser(user);
  }
  addExtra(user) {
    user.carrito.comida[this.i].extrasSeleccionados.push(this.extra);
    this.auth.updateUser(user);
  }
  onChange(event, user) {
    this.extra = event.target.value;
  }

}
