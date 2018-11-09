import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private as: AuthService) {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required]],
      password: ['', [ Validators.required]],
    });
  }
  ngOnInit() {
  }
  logIn() {
    this.as.logIn(this.form.value.email, this.form.value.password);
    this.form.reset();
  }
}
