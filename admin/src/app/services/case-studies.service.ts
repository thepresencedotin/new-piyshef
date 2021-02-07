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
export class CaseStudiesService {

  collection = "case-studies"

  constructor(public db:AngularFirestore,public auth:AuthService,public storage:StorageService,public common:CommonService,public router:Router) { }

  add(data, Img,galleryEvent?:any) {
    this.common.showLoader()
    return this.db.collection(this.collection).add(data).then(res => {
      let path = this.auth.getUid() + "/" + this.collection + "/" + res.id + "/image"
      console.log("image file",Img)
      console.log("data",data)
      // this.multipleGallery(galleryEvent,res.id)
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

  multipleGallery(galleryEvent,id){
    for (var i = 0; i < galleryEvent.target.files.length; i++){
      const file = galleryEvent.target.files[i]
        let date = new Date()
        let path = "/case-studies/" + file.name + date
        console.log(path, file)
        this.storage.upload(path, file).then(res=>{
          res.ref.getDownloadURL().then(res=>{
            console.log("galleryUrl",res)
            console.log("galleryPath",path)
            let galleryUrl = res
            let galleryPath = path
            let allData = {galleryPath,galleryUrl} 
            // this.EventGallery.push(allData)
            this.db.collection(this.collection).doc(id).collection("gallery").add(allData).then(res=>{
              console.log("case studies Gallery Add!")
              this.common.showToast("success","Case Studies Added Successful!","Successful!")
            }).catch(err=>{
              this.common.showToast("error","Error",err)
            }).finally(()=>{
              this.common.stopLoader()
            })
          })
        })
    }
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
        this.common.showToast("success", "Update Successful", "Case Study Updated Successfully")
        this.router.navigateByUrl("/admin/case-studies")
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
      this.common.showToast("success","","Deleted Successful!")
    })
  }

}
