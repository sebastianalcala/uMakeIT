import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu/menu.service';
import { comida } from 'src/app/models/comida';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comida-admin',
  templateUrl: './comida-admin.component.html',
  styleUrls: ['./comida-admin.component.scss']
})
export class ComidaAdminComponent implements OnInit {
  form: FormGroup;
  Menu = [];
  constructor(private formBuilder: FormBuilder, public ms: MenuService) {
    this.form = this.formBuilder.group({
      extra: ['', [ Validators.required]],
    });
   }

  ngOnInit() {
      this.ms.getMenu().subscribe(Menu => {
      this.Menu = Menu;
    });
  }
  // tslint:disable-next-line:no-shadowed-variable
  deleteComida(event, comida) {
    this.ms.deleteComida(comida);
  }
    // tslint:disable-next-line:no-shadowed-variable
  eliminarExtra(event, comida: comida, extra: string) {
    const index = comida.extras.indexOf(extra);
    if (index !== -1) {
      comida.extras.splice(index, 1);
    }
    this.ms.updateComida(comida);
  }
  // tslint:disable-next-line:no-shadowed-variable
  disponible(event, c: comida) {
    c.disponible = !c.disponible;
    this.ms.updateComida(c);
  }
}
