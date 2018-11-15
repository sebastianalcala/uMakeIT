import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {
  modalRef: BsModalRef;
  form: FormGroup;
  config = {
    keyboard: true
  };
  constructor(private modalService: BsModalService, private formBuilder: FormBuilder, public auth: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required]],
      password: ['', [ Validators.required] ],
    });
  }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  register() {
    this.auth.register(this.form.value.email, this.form.value.password);
    this.form.reset();
    this.modalRef.hide();
  }

}
