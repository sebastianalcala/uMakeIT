import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from '../../../services/menu/menu.service';
import { comida } from 'src/app/models/comida';
@Component({
  selector: 'app-nuevo-extra',
  templateUrl: './nuevo-extra.component.html',
  styleUrls: ['./nuevo-extra.component.scss']
})
export class NuevoExtraComponent implements OnInit {
  form: FormGroup;
  editing = false;
  @Input() eComida;
  constructor(private formBuilder: FormBuilder, public ms: MenuService) {
    this.form = this.formBuilder.group({
      extra: ['', [ Validators.required]],
    });
  }
  ngOnInit() {
    console.log();
  }
  editExtra(event) {
    this.editing = !this.editing;
  }
  // tslint:disable-next-line:no-shadowed-variable
  agregarExtra(comida: comida) {
    comida.extras.push(this.form.value.extra);
    this.ms.updateComida(comida);
    this.form.reset();
  }
}
