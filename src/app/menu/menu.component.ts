import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  modo = false; // false;
  constructor(private as: AuthService, private router: Router) { }

  ngOnInit() {
  }
  comprar() {
    this.router.navigate(['/orden']);
  }
  compras() {
    this.router.navigate(['/compras']);
  }
  toggleModo() {
    this.modo = !this.modo;
  }
  signOut() {
    this.as.signOut();
  }

}
