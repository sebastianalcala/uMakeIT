import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { comida } from '../../models/comida';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { query } from '@angular/core/src/render3/query';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  comidaCollection: AngularFirestoreCollection<comida>;
  comidaDoc: AngularFirestoreDocument<comida>;
  Menu: Observable<comida[]>;
  constructor(public db: AngularFirestore) {

    this.comidaCollection = this.db.collection('Menu', ref => ref);

  }

  getMenu(): Observable<comida[]> {
    this.Menu = this.comidaCollection.snapshotChanges().pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as comida;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
      return this.Menu;
  }

  // tslint:disable-next-line:no-shadowed-variable
  deleteComida(comida: comida) {
    this.comidaDoc = this.db.doc(`Menu/${comida.id}`);
    this.comidaDoc.delete();
  }
  // tslint:disable-next-line:no-shadowed-variable
  addComida(comida: comida) {
    this.comidaCollection.add(comida);
  }
  // tslint:disable-next-line:no-shadowed-variable
  updateComida(comida: comida) {
    this.comidaDoc = this.db.doc(`Menu/${comida.id}`);
    this.comidaDoc.update(comida);
  }
}
