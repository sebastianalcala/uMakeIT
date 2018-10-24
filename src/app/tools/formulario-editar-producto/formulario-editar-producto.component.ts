import { Component, OnInit,TemplateRef } from '@angular/core';
import { MenuService } from "../../services/menu.service";
import { comida } from 'src/app/model/comida';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-formulario-editar-producto',
  templateUrl: './formulario-editar-producto.component.html',
  styleUrls: ['./formulario-editar-producto.component.scss']
})
export class FormularioEditarProductoComponent implements OnInit {
  form: FormGroup;
  comida= {} as comida;
  modalRef: BsModalRef;

  constructor(private formBuilder: FormBuilder,public ms: MenuService,private modalService: BsModalService) {
    this.form= this.formBuilder.group({
      name: ['', ],
      description: ['', ],
      price: ['', ],
      img:['',],
    });
   }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  editarComida(){
    if(this.form.value.name !== ""){
      this.comida.name=this.form.value.name;
      this.ms.updateComida(this.comida);
    }
    if(this.form.value.description !== ""){
      this.comida.name=this.form.value.description;
      this.ms.updateComida(this.comida);
    }
    if(this.form.value.price !== ""){
      this.comida.name=this.form.value.price;
      this.ms.updateComida(this.comida);
    }
    if(this.form.value.img !== ""){
      this.comida.img=this.form.value.img;
      this.ms.updateComida(this.comida);
    }
  }

}
