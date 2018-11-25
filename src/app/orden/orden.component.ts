import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/autentificacion/auth.service';
import { user } from '../models/user';


@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})

export class OrdenComponent implements OnInit {
  constructor(public router: Router, public auth: AuthService) { }

  ngOnInit() {
  }
  menu() {
    this.router.navigate(['/menu']);
  }
  compras() {
    this.router.navigate(['/compras']);
  }
  orden() {
    this.router.navigate(['/orden']);
  }
}
