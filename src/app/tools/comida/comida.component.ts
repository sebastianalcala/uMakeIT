import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { comida } from 'src/app/model/comida';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {

  Menu = [];
  eComida: comida;
  editing = false;

  constructor(public ms: MenuService) {  }

  ngOnInit() {
      this.ms.getMenu().subscribe(Menu => {
      this.Menu = Menu;
    });
  }
  // tslint:disable-next-line:no-shadowed-variable
  agregarComida(comida: comida) {

  }


}
