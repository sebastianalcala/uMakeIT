import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { MenuService } from '../../../services/menu/menu.service';
import { comida } from 'src/app/models/comida';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-formulario-editar-producto',
  templateUrl: './formulario-editar-producto.component.html',
  styleUrls: ['./formulario-editar-producto.component.scss']
})
export class FormularioEditarProductoComponent implements OnInit {
  form: FormGroup;
  comida = {} as comida;
  modalRef: BsModalRef;
  localUrl;
  @Input() eComida;
  constructor(private formBuilder: FormBuilder, public ms: MenuService, private modalService: BsModalService) {
    this.form = this.formBuilder.group({
      name: ['', ],
      description: ['', ],
      price: ['', ],
    });
   }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  // tslint:disable-next-line:no-shadowed-variable
  editarComida(comida: comida) {
    this.comida = comida;
    if (this.form.value.name !== '') {
      this.comida.name = this.form.value.name;
      console.log(this.comida);
      this.ms.updateComida(this.comida);
    }
    if (this.form.value.description !== '') {
      this.comida.description = this.form.value.description;
      this.ms.updateComida(this.comida);
    }
    if (this.form.value.price !== '') {
      this.comida.price = this.form.value.price;
      this.ms.updateComida(this.comida);
    }
    if (this.localUrl !== null) {
      this.comida.img = this.localUrl;
      this.ms.updateComida(this.comida);
    }
    this.form.reset();
    this.comida = {extrasSeleccionados: [] = []};
    this.modalRef.hide();
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
