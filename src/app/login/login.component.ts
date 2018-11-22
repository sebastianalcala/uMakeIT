import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/autentificacion/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, public auth: AuthService, public router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required]],
      password: ['', [ Validators.required]],
    });
  }
  ngOnInit() {
  }
  // tslint:disable-next-line:no-shadowed-variable
  login() {
    this.auth.logIn(this.form.value.email, this.form.value.password);
    this.form.reset();
  }
}
