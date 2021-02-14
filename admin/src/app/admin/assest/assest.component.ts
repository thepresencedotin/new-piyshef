import { Component, OnInit } from '@angular/core';
import { AssetsService } from 'src/app/services/assets.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-assest',
  templateUrl: './assest.component.html',
  styleUrls: ['./assest.component.scss']
})
export class AssestComponent implements OnInit {
  GalleryImg: any = null
  gallery = []
  myForm
  constructor(public assets: AssetsService, public common: CommonService) { }

  ngOnInit(): void {
    this.getAssets()
  }

  getAssets() {
    this.assets.get().subscribe(res => {
      this.gallery = res
    })
  }

  imageProcessing(event) {
    for (var i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i]
      if (file.size / 1024 < 500) {
        this.assets.add(file)
      }
      else {
        this.common.showToast("error", "Failed", "Size should be less then 500kb")
      }
    }
  }

  delete(id) {
    this.assets.delete(id)
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
