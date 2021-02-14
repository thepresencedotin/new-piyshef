import { Component, OnInit, ViewChild } from '@angular/core';
import { CaseStudiesService } from 'src/app/services/case-studies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import * as firebase from 'firebase';
import { AssetsService } from 'src/app/services/assets.service';

@Component({
  selector: 'app-single-case-studies',
  templateUrl: './single-case-studies.component.html',
  styleUrls: ['./single-case-studies.component.scss']
})
export class SingleCaseStudiesComponent implements OnInit {
  id
  data: any = { heading: null,subHeading: null,clientName: null, priority: null, content: null }
  selectedImg
  images = []
  GalleryImg
  myForm
  gallery = []
  text:string
  ckeditorContent: string = '<p>Some html</p>';
  constructor(public caseService: CaseStudiesService, public route: ActivatedRoute, public common: CommonService,public router:Router,public assets:AssetsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if(this.id){
      this.caseService.getSingle(this.id).subscribe(res => {
        this.data = res
        console.log("single Case Studies", this.data)
        if (!this.data) {
          this.data = { heading: null, subHeading: null, clientName: null, priority: null, content: null }
        }
      })
    }
    this.getAssets()
  }

  submit(form) {
    this.common.showLoader()
    if (this.id) {
      // update document
      console.log("form update Value", form.value)
      this.data = Object.assign({}, form.value);
      console.log("id", this.id)
      if (this.selectedImg) {
        this.caseService.update(this.id, this.data, this.selectedImg)
      } else {
        this.caseService.update(this.id, this.data)
      }
    }
    else {
      // add document
      let timestamp = firebase.firestore.Timestamp.now()
      form.value.timestamp = timestamp
      console.log("case studies data before add",form.value)
        // this.caseService.add(form.value, this.selectedImg,this.images).then(res => {
        this.caseService.add(form.value, this.selectedImg).then(res => {
          this.common.showToast("success", "Add Successful", "")
          this.router.navigateByUrl("/admin/case-studies")
        }).catch(err => {
          this.common.showToast("error", "Error Occoured", "Please Try again")
        }).finally(() => {
          this.common.stopLoader()
        })
      }
    }

    getAssets() {
      this.assets.get().subscribe(res => {
        this.gallery = res
      })
    }

  imageProcessing(event) {
    if (event.target.files[0].size / 1024 < 500) {
      this.selectedImg = event.target.files[0];
    }
    else {
      this.selectedImg = null
      this.common.showToast("error", "Failed", "Size should be less then 500kb")
    }
  }

  cancel() {
    window.history.back()
  }  

  galleryImageProcessing(event){
    console.log(event)
    this.GalleryImg = event
      if (event.target.files && event.target.files[0]) {
          var filesAmount = event.target.files.length;
          for (let i = 0; i < filesAmount; i++) {
              var reader = new FileReader();
              reader.onload = (event:any) => {
                console.log(event.target.result);
                  this.images.push(event.target.result); 
                console.log(this.images)
                  this.myForm.patchValue({
                    fileSource: this.images
                  });
              }
              reader.readAsDataURL(event.target.files[i]);
          }
      }
  }

  PreviewDelete(index){
    console.log(index)
    console.log("images",this.images)
    this.images.splice(index,1)
    console.log("images",this.images)
  }

  copyLink(link) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = link;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.common.showToast("success", "Link Copied!","")
    console.log("link copied!")
  }
 
}