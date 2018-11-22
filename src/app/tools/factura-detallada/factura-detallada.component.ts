import { Component, OnInit, Input } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

@Component({
  selector: 'app-factura-detallada',
  templateUrl: './factura-detallada.component.html',
  styleUrls: ['./factura-detallada.component.scss']
})
export class FacturaDetalladaComponent implements OnInit {
  @Input() u;

  constructor(public cs: CarritoService) { }

  ngOnInit() {
  }

}
