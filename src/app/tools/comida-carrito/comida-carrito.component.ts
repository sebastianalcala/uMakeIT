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
  constructor(public auth: AuthService) {}
  ngOnInit() {
  }
  // tslint:disable-next-line:no-shadowed-variable
  deleteComida(event, comida: comida , user: user) {
    const index: number = user.carrito.indexOf(comida);
    console.log(index);
    if (index !== -1) {
      user.carrito.splice(index, 1);
    }
    this.auth.updateUser(user);
  }
}
