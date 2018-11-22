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

  constructor(public auth: AuthService, public cs: CarritoService) {}

  ngOnInit() {
  }

}
