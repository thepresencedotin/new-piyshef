import { Component, OnInit } from '@angular/core';
import { HeadingService } from 'src/app/services/heading.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
tagLine = ""
id = null
  constructor(public heading:HeadingService) { }

  ngOnInit(): void {
    this.heading.getAll().subscribe(res=>{
      this.tagLine = res[0].tagLine
      this.id = res[0].id
    })
  }

  update(){
    console.log(this.id)
    if(this.id) {
      this.heading.update(this.tagLine,this.id)
    }
    else
    {
      this.heading.add(this.tagLine)
    }
  } 
}
