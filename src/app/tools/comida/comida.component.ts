import { Component, OnInit, Input } from '@angular/core';
import { comida } from 'src/app/models/comida';
import { MenuService } from 'src/app/services/menu/menu.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { AuthService } from 'src/app/services/autentificacion/auth.service';
import { SearchService } from 'src/app/services/search/search.service';
import { Subject } from 'rxjs';



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

  constructor(public ms: MenuService, public cs: CarritoService, public auth: AuthService, private ss: SearchService) {  }

  ngOnInit() {
      this.ms.getMenu().subscribe(Menu => {
      this.Menu = Menu;
    });
  }


}
