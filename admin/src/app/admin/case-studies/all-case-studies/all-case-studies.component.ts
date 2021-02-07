import { Component, OnInit } from '@angular/core';
import { CaseStudiesService } from 'src/app/services/case-studies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-case-studies',
  templateUrl: './all-case-studies.component.html',
  styleUrls: ['./all-case-studies.component.scss']
})
export class AllCaseStudiesComponent implements OnInit {
allCaseStudies = []

  constructor(public caseService:CaseStudiesService,public router:Router) { }

  ngOnInit(): void {
    this.caseService.getAll().subscribe(res=>{
      this.allCaseStudies = res
      console.log("all Case Studies",this.allCaseStudies)
    })
  }

  update(id) {
    this.router.navigateByUrl("/admin/case-studies/single/" + id)
  }

  delete(id) {
    this.caseService.delete(id)
  }

}
