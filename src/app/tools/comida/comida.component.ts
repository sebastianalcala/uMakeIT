import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { comida } from 'src/app/model/comida';
import { CarritoService } from 'src/app/services/carrito.service';
import { AuthService } from 'src/app/services/auth.service';
import { user } from 'src/app/model/user';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {
  Menu = [];
  eComida: comida;
  editing = false;
  @Input() u;

  constructor(public ms: MenuService, public cs: CarritoService, public auth: AuthService) {  }

  ngOnInit() {
      this.ms.getMenu().subscribe(Menu => {
      this.Menu = Menu;
    });
  }

}
