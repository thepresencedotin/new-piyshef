import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';
import { StorageService } from './storage.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  collection = "contact"

  constructor(public db:AngularFirestore,public auth:AuthService,public storage:StorageService,public common:CommonService,public router:Router) { }

  getAll() {
    return this.db.collection(this.collection,ref=>ref.orderBy("timestamp","desc")).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getSingle(id) {
    return this.db.collection(this.collection).doc(id).valueChanges()
  }

}
