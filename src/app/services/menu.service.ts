import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { comida } from '../model/comida';
import { Observable } from "rxjs";
import { map, min } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  comidaCollection: AngularFirestoreCollection<comida>;
  comidaDoc: AngularFirestoreDocument<comida>;
  Menu: Observable<comida[]>;
  extra:{}={};

  constructor(public db: AngularFirestore) {

    this.comidaCollection = this.db.collection('Menu', ref=>ref);
    
  }
  
  getMenu():Observable<comida[]>{
    this.Menu = this.comidaCollection.snapshotChanges().pipe(map(changes=>
      {
        return changes.map(action=>{
          const data=action.payload.doc.data() as comida;
          data.id= action.payload.doc.id;
          return data;
        });
      }));
      return this.Menu;
  }
  deleteComida(comida: comida){
    this.comidaDoc = this.db.doc(`Menu/${comida.id}`);
    this.comidaDoc.delete();
  }
  // deleteExtra(comida){
  //   this.comidaDoc = this.db.doc(`Menu/${comida.id}`);
  //   this.comidaDoc.update({extras:[]})
  // }
  addComida(comida: comida){
    this.comidaCollection.add(comida);
  }
  updateComida(comida: comida){
    this.comidaDoc = this.db.doc(`Menu/${comida.id}`)
    this.comidaDoc.update(comida);
  }
}
