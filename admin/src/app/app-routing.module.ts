import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { JournalsComponent } from './admin/journals/journals.component';
import { CaseStudiesComponent } from './admin/case-studies/case-studies.component';
import { AllJournalComponent } from './admin/journals/all-journal/all-journal.component';
import { SingleJournalComponent } from './admin/journals/single-journal/single-journal.component';
import { AllCaseStudiesComponent } from './admin/case-studies/all-case-studies/all-case-studies.component';
import { SingleCaseStudiesComponent } from './admin/case-studies/single-case-studies/single-case-studies.component';
import { ContactComponent } from './admin/contact/contact.component';
import { HeadingComponent } from './admin/heading/heading.component';
import { AssestComponent } from './admin/assest/assest.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent,canActivate:[AuthGuardService],children:[
    {path:'',component:DashboardComponent},
    {path:'contact',component:ContactComponent},
    {path:'heading',component:HeadingComponent},
    {path:'assets',component:AssestComponent},
    {path:'journals',component:JournalsComponent,children:[
      {path:'',component:AllJournalComponent},
      {path:'single',component:SingleJournalComponent},
      {path:'single/:id',component:SingleJournalComponent},
    ]},
    {path:'case-studies',component:CaseStudiesComponent,children:[
      {path:'',component:AllCaseStudiesComponent},
      {path:'single',component:SingleCaseStudiesComponent},
      {path:'single/:id',component:SingleCaseStudiesComponent}
    ]}
  ]},
  {path:'auth',component:AuthComponent,children:[
    {path:'',component:SigninComponent}
  ]},
  {path:'',redirectTo:'/admin',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
