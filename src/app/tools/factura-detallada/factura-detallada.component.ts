import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-factura-detallada',
  templateUrl: './factura-detallada.component.html',
  styleUrls: ['./factura-detallada.component.scss']
})
export class FacturaDetalladaComponent implements OnInit {
  @Input() monto;
  constructor() { }

  ngOnInit() {
  }

}
