import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  menu(){
    this.router.navigate(['/menu']);
  }
  salir(){
    this.router.navigate(['']);
  }
  compras(){
    this.router.navigate(['/compras']);
  }

}
