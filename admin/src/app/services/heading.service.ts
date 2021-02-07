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
export class HeadingService {

  collection = "tagLine"

  constructor(public db:AngularFirestore,public auth:AuthService,public storage:StorageService,public common:CommonService,public router:Router) { }

  add(tagLine) {
    this.common.showLoader()
    return this.db.collection(this.collection).add({tagLine:tagLine}).then(res => {
      this.common.showToast("success","","Tagline Save!")
    }).catch(err => {
      this.common.showToast("error", "Error Occoured", "Unable to perform this operation")
      return err;
    }).finally(() => {
      this.common.stopLoader()
    })
  }

  getAll() {
    return this.db.collection(this.collection).snapshotChanges().pipe(
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

  update(tagLine,id) {
    this.common.showLoader()
    return this.db.collection(this.collection).doc(id).update({tagLine:tagLine}).then(res => {
      this.common.showToast("success","","Tagline Updated!")
    }).catch(err => {
      this.common.showToast("error", "Error Occoured", "Unable to perform this operation")
      return err;
    }).finally(() => {
      this.common.stopLoader()
    })
  }

}
