import { Component, AfterViewChecked, Input } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';

declare let paypal: any;

@Component({
  selector: 'app-paypalbtn',
  templateUrl: './paypalbtn.component.html',
  styleUrls: ['./paypalbtn.component.scss']
})
export class PaypalbtnComponent implements AfterViewChecked {
  constructor(private cs: CarritoService) { }
  @Input() u;
  @Input() monto;
  addScript = false;
  paypalConfig = {
    env: 'sandbox',
    style: {
      label: 'paypal',
      size:  'medium',    // small | medium | large | responsive
      shape: 'rect',     // pill | rect
      color: 'blue',     // gold | blue | silver | black
      tagline: false
    },
    client: {
      sandbox: 'AQwqe7Z9LAp68skSQpeO4xFXEg449U5IZM7X5JnfYXqHbbMtFhTXIteoNctJmfiolYgIG2efZdzR3lj7',
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
          payment: {
              transactions: [
                  {
                      amount: { total: this.monto + (this.monto * 12) / 100, currency: 'USD' }
                  }
              ]
          }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
          window.alert('Payment Complete!');
          this.cs.guardarOrden(this.u);
      });
    }
  };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then (() => {
        // tslint:disable-next-line:no-unused-expression
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
      });
    }
  }
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }
}
