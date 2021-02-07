import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { StorageService } from './storage.service';
import { CommonService } from './common.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JournalsService {

  collection = "journals"

  constructor(public db:AngularFirestore,public auth:AuthService,public storage:StorageService,public common:CommonService,public router:Router) { }

  add(data, Img) {
    this.common.showLoader()
    return this.db.collection(this.collection).add(data).then(res => {
      let path = this.auth.getUid() + "/" + this.collection + "/" + res.id + "/image"
      console.log("image file",Img)
      console.log("data",data)
      this.storage.upload(path, Img).then(imgUrl => {
        this.update(res.id, { imgUrl: imgUrl })
      }).catch(err => {
        console.log(err)
      })
      return res;
    }).catch(err => {
      this.common.showToast("error", "Error Occoured", "Unable to perform this operation")
      return err;
    }).finally(() => {
      this.common.stopLoader()
    })
  }

  getAll() {
    return this.db.collection(this.collection,ref=>ref.orderBy("priority","asc")).snapshotChanges().pipe(
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

  update(id, data, img?) {
    this.common.showLoader()
    let path = this.auth.getUid() + "/" + this.collection + "/" + id + "/image";
    if (img) {
      return this.storage.upload(path, img).then(newUrl => {
        return this.update(id, { imgUrl: newUrl, ...data });
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        this.common.stopLoader()
      })
    } else {
      return this.db.collection(this.collection).doc(id).update(data).then(res => {
        this.common.showToast("success", "Update Successful", "Journal Updated Successfully")
        this.router.navigateByUrl("/admin/journals")
        return res
      }).catch(err => {
        return err;
      }).finally(() => {
        this.common.stopLoader()
      })
    }
  }

  delete(id) {
    this.common.showLoader()
    let path = this.auth.getUid() + "/" + this.collection + "/" + id + "/image";
    return this.db.collection(this.collection).doc(id).delete().then(res => {
      this.storage.deleteImage(path);
      return res
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      this.common.stopLoader()
    })
  }

}
