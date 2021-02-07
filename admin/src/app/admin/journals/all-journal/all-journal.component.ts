import { Component, OnInit } from '@angular/core';
import { JournalsService } from 'src/app/services/journals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-journal',
  templateUrl: './all-journal.component.html',
  styleUrls: ['./all-journal.component.scss']
})
export class AllJournalComponent implements OnInit {
  allJournal = []

  constructor(public journalService:JournalsService,public router:Router) { }

  ngOnInit(): void {
    this.journalService.getAll().subscribe(res=>{
      this.allJournal = res
      console.log("all Journal",this.allJournal)
    })
  }

  update(id) {
    this.router.navigateByUrl("/admin/journals/single/" + id)
  }

  delete(id) {
    this.journalService.delete(id)
  }

}
