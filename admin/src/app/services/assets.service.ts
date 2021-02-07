import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonService } from './common.service';
import { StorageService } from './storage.service';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  collection = "assets"
  constructor(public db: AngularFirestore, public auth: AuthService, public storage: StorageService, public common: CommonService, public router: Router) { }

  add(file) {
    this.common.showLoader()
    this.db.collection(this.collection).add({}).then(res => {
      let path = "assets/" + res.id + "/image"
      return this.storage.upload(path, file).then(url => {
        let timestamp = firebase.firestore.Timestamp.now()
        return this.db.collection(this.collection).doc(res.id).set({ imgUrl: url, timestamp: timestamp })
      }).catch(err => {
        console.log(err)
      })
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      this.common.stopLoader()
    })
  }

  get() {
    return this.db.collection(this.collection, ref => ref.orderBy("timestamp", "desc")).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  delete(id) {
    this.common.showLoader()
    let path = "assets/" + id + "/image"
    this.storage.deleteImage(path)
    this.db.collection(this.collection).doc(id).delete().finally(() => {
      this.common.stopLoader()
      console.log("assets delete")
    })
  }


}
