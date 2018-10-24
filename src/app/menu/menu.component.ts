import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MenuService } from "../services/menu.service";
import { comida } from 'src/app/model/comida';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  modo:boolean =false; //false;
  
  constructor(public router: Router) { }

  ngOnInit() {
  }
  comprar(){
    this.router.navigate(['/orden']);
  }
  salir(){
    this.router.navigate(['']);
  }
  compras(){
    this.router.navigate(['/compras']);
  }
  toggleModo(){
    this.modo=!this.modo;
  }
  
}
