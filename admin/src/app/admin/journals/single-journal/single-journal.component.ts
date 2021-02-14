import { Component, OnInit } from '@angular/core';
import { JournalsService } from 'src/app/services/journals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import * as firebase from 'firebase';
import { timeStamp } from 'console';

@Component({
  selector: 'app-single-journal',
  templateUrl: './single-journal.component.html',
  styleUrls: ['./single-journal.component.scss']
})
export class SingleJournalComponent implements OnInit {
  id
  data: any = { title: null, authorName:null, priority: null, content: null }
  selectedImg
  constructor(public journalService: JournalsService, public route: ActivatedRoute, public common: CommonService,public router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if(this.id){
      this.journalService.getSingle(this.id).subscribe(res => {
        this.data = res
        console.log("single journal Studies", this.data)
        if (!this.data) {
          this.data = { title: null, authorName:null, priority: null, content: null }
        }
      })
    }
  }

  submit(form) {
    this.common.showLoader()
    if (this.id) {
      // update document
      console.log("form update Value", form.value)
      this.data = Object.assign({}, form.value);
      console.log("id", this.id)
      if (this.selectedImg) {
        this.journalService.update(this.id, this.data, this.selectedImg)
      } else {
        this.journalService.update(this.id, this.data)
      }
    }
    else {
      // add document
        let timestamp = firebase.firestore.Timestamp.now()
        form.value.timestamp = timestamp
        console.log("journal Data",form.value)
        this.journalService.add(form.value, this.selectedImg).then(res => {
          this.common.showToast("success", "Add Successful", "")
          this.router.navigateByUrl("/admin/journals")
        }).catch(err => {
          this.common.showToast("error", "Error Occoured", "Please Try again")
        }).finally(() => {
          this.common.stopLoader()
        })
      }
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

}
