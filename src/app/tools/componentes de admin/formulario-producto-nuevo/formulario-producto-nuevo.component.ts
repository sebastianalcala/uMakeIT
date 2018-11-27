import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { MenuService } from '../../../services/menu/menu.service';
import { comida } from 'src/app/models/comida';

@Component({
  selector: 'app-formulario-producto-nuevo',
  templateUrl: './formulario-producto-nuevo.component.html',
  styleUrls: ['./formulario-producto-nuevo.component.scss']
})
export class FormularioProductoNuevoComponent implements OnInit {
  form: FormGroup;
  modalRef: BsModalRef;
  comida = {extras: [] = [] , extrasSeleccionados: [] = []} as comida;
  cambiarPagina = false;
  extras = [];
  localUrl;
  constructor(private formBuilder: FormBuilder, public ms: MenuService, private modalService: BsModalService) {
    this.form = this.formBuilder.group({
      name: ['', [ Validators.required]],
      description: ['', [ Validators.required]],
      price: ['', [ Validators.required]],
      extra: [''],
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
    this.comida.img = this.localUrl;
    this.comida.extrasSeleccionados.push(null);
    this.comida.extrasSeleccionados.pop();
    this.ms.addComida(this.comida);
    this.cambiarPagina = !this.cambiarPagina;
    this.extras = [];
    this.comida = {extras: [] = [], extrasSeleccionados: [] = []} as comida;
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
  onFileChanged(event: any) {
    if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        // tslint:disable-next-line:no-shadowed-variable
        reader.onload = (event: any) => {
            this.localUrl = event.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }
  }

}
