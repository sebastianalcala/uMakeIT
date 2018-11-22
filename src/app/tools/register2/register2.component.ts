import { Component, OnInit , ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/autentificacion/auth.service';
import { user } from 'src/app/models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.scss']
})
export class Register2Component implements OnInit {
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  isModalShown = false;
  form: FormGroup;
  @Input() u;
  constructor(private formBuilder: FormBuilder, public auth: AuthService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', [ Validators.required]],
      // photoURL: ['', [ Validators.required] ],
    });
   }

  ngOnInit() {
    this.showModal();
  }
  showModal(): void {
    this.isModalShown = true;
  }
  hideModal(): void {
    this.autoShownModal.hide();
  }
  onHidden(): void {
    this.isModalShown = false;
  }
  // tslint:disable-next-line:no-shadowed-variable
  add2User(user: user) {
    user.name = this.form.value.name;
    this.auth.add2User(user);
    this.form.reset();
    this.isModalShown = !this.isModalShown;
    this.router.navigate(['/menu']);
  }

}
