import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HeaderComponent } from './share/header/header.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { CaseStudiesComponent } from './admin/case-studies/case-studies.component';
import { JournalsComponent } from './admin/journals/journals.component';
import { AllCaseStudiesComponent } from './admin/case-studies/all-case-studies/all-case-studies.component';
import { SingleCaseStudiesComponent } from './admin/case-studies/single-case-studies/single-case-studies.component';
import { SingleJournalComponent } from './admin/journals/single-journal/single-journal.component';
import { AllJournalComponent } from './admin/journals/all-journal/all-journal.component';
import { ContactComponent } from './admin/contact/contact.component';
import { HeadingComponent } from './admin/heading/heading.component';
import { AssestComponent } from './admin/assest/assest.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AdminComponent,
    SigninComponent,
    AuthComponent,
    CaseStudiesComponent,
    JournalsComponent,
    AllCaseStudiesComponent,
    SingleCaseStudiesComponent,
    SingleJournalComponent,
    AllJournalComponent,
    ContactComponent,
    HeadingComponent,
    AssestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule, // required animations module
    NgxUiLoaderModule,
    ToastrModule.forRoot(), // ToastrModule added
    CKEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
