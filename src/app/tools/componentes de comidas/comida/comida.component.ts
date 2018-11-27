import { Component, OnInit, Input  } from '@angular/core';
import { comida } from 'src/app/models/comida';
import { MenuService } from 'src/app/services/menu/menu.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { AuthService } from 'src/app/services/autentificacion/auth.service';
import { combineLatest, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {
  Menu;
  comidas;

  eComida: comida;
  editing = false;

  startAt = new Subject();
  endAt = new Subject();
  startobs = this.startAt.asObservable();
  endobs = this.endAt.asObservable();


  @Input() u;


  // tslint:disable-next-line:max-line-length
  constructor(public ms: MenuService, public cs: CarritoService, public auth: AuthService, private afs: AngularFirestore) {  }

  ngOnInit() {
     this.ms.getMenu().subscribe(comidas => {
      this.comidas = comidas;
    });
    combineLatest(this.startobs, this.endobs).subscribe((value) => {
      this.firequery(value[0], value[1]).subscribe((comidas) => {
        this.comidas = comidas;
      });
    });
  }
   search($event) {
    const q = $event;
    if (q !== null) {
      this.startAt.next(q);
      this.endAt.next(q + '\uf8ff');
    } else {
      this.comidas = this.Menu;
    }
  }
  firequery(start, end) {
    return this.afs.collection('Menu', ref => ref.orderBy('name').startAt(start).endAt(end)).valueChanges();
  }

}
