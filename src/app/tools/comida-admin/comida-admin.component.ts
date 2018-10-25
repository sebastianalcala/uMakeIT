import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { comida } from 'src/app/model/comida';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-comida-admin',
  templateUrl: './comida-admin.component.html',
  styleUrls: ['./comida-admin.component.scss']
})
export class ComidaAdminComponent implements OnInit {
  form: FormGroup;
  Menu = [];
  editing = false;

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
  editExtra(event) {
    this.editing = !this.editing;

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
  agregarExtra(comida: comida) {
    comida.extras.push(this.form.value.extra);
    this.ms.updateComida(comida);
  }

}
