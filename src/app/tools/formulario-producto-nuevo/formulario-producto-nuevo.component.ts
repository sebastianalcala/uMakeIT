import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { MenuService } from '../../services/menu.service';
import { comida } from 'src/app/model/comida';

@Component({
  selector: 'app-formulario-producto-nuevo',
  templateUrl: './formulario-producto-nuevo.component.html',
  styleUrls: ['./formulario-producto-nuevo.component.scss']
})
export class FormularioProductoNuevoComponent implements OnInit {
  form: FormGroup;
  modalRef: BsModalRef;
  comida = {extras: [] = []} as comida;
  cambiarPagina = false;
  extras = [];

  constructor(private formBuilder: FormBuilder, public ms: MenuService, private modalService: BsModalService) {
    this.form = this.formBuilder.group({
      name: ['', [ Validators.required]],
      description: ['', [ Validators.required]],
      img: ['', [ Validators.required]],
      price: ['', [ Validators.required]],
      extra: ['', [ Validators.required]],
    });
  }
  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  addComida() {
    for (let j = 0; j < this.extras.length; j++) {
      this.comida.extras.push(this.extras[j]);
    }
    this.ms.addComida(this.comida);
    this.cambiarPagina = !this.cambiarPagina;
    this.extras = [];
    this.comida = {extras: [] = []} as comida;
    this.form.reset();
    this.modalRef.hide();
  }
  cambiarPag() {
    this.cambiarPagina = !this.cambiarPagina;
  }
  addExtra() {
    this.extras.push(this.form.value.extra);
  }
  eliminarExtra(extra: string) {
    const index: number = this.extras.indexOf(extra);
    if (index !== -1) {
      this.extras.splice(index, 1);
    }
  }
}
