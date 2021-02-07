import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
allContacts = []
  constructor(public contact:ContactService) { }

  ngOnInit(): void {
    this.contact.getAll().subscribe(res=>{
      this.allContacts = res
      console.log("allContacts",this.allContacts)
    })
  }

}
