import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  modalRef: BsModalRef;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private modalService: BsModalService, private as: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required]],
      name: ['', [ Validators.required]],
      password: ['', [ Validators.required]],
      passwordConf: ['', [ Validators.required]],
    });
  }
  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  closeFirstModal() {
    this.modalRef.hide();
    this.modalRef = null;
  }
}
