import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { LoginComponent } from './account/login/login.component';
import { MentorLoginComponent } from './account/mentor-login/mentor-login.component';
import { JobsStationComponent } from './dashboard/jobs-station/jobs-station.component';
import { MentorHomeComponent } from './dashboard/mentor/mentor-home/mentor-home.component';
import { MentorRegistrationComponent } from './dashboard/mentor/mentor-registration/mentor-registration.component';
import { MentorComponent } from './dashboard/mentor/mentor.component';
import { ViewAllMentorsComponent } from './dashboard/mentor/view-all-mentors/view-all-mentors.component';
import { UserComponent } from './dashboard/user/user.component';
import { CommunicationComponent } from './dashboard/user/users/communication/communication.component';
import { MentorViewComponent } from './dashboard/user/users/mentor-view/mentor-view.component';
import { ArticlesComponent } from './dashboard/user/users/phd/articles/articles.component';
import { PhdComponent } from './dashboard/user/users/phd/phd.component';
import { SchollerSummaryComponent } from './dashboard/user/users/scholler-summary/scholler-summary.component';
import { UserAccountComponent } from './dashboard/user/users/user-account/user-account.component';
import { UserDashboardComponent } from './dashboard/user/users/user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './dashboard/user/users/user-profile/user-profile.component';
import { HomeComponent } from './home/home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { BankAccountComponent } from './shared/bank-account/bank-account.component';
import { ContactComponent } from './shared/contact/contact.component';
import { FaqsComponent } from './shared/faqs/faqs.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';
import { RefundComponent } from './shared/refund/refund.component';
import { SupportComponent } from './shared/support/support.component';
import { TermsComponent } from './shared/terms/terms.component';
import { DemoVideoComponent } from './video/demo-video/demo-video.component';
import { VideoComponent } from './video/video/video.component';
import { PhdWritingComponent } from './writing-services/phd-writing/phd-writing.component';
import { SuccessComponent } from './shared/success/success.component';
import { AboutComponent } from './shared/about/about.component';
import { PublicationComponent } from './dashboard/user/users/publication/publication.component';
import { PublicationDetailsComponent } from './dashboard/user/users/publication/publication-details/publication-details.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'user-dash',component:UserComponent,
    children:[
      {
        path:'user-dashboard',component:UserDashboardComponent,
      },
      {
        path:'user-profile',component:UserProfileComponent,
      },
      {
        path:'user-summary',component:SchollerSummaryComponent,
      },
      {
        path:'user-messaging',component:CommunicationComponent,
      },
      {
        path:'user-account',component:UserAccountComponent,
      },
      {
        path:'mentor-view',component:MentorViewComponent,
      },
      {
        path:'phd/:id',component:PhdComponent,
      },
      {
        path:'phd-articles/:id',component:ArticlesComponent,
      },
      {
        path:'video/:id',component:VideoComponent,
      },
      {
        path:'jobs-station',component:JobsStationComponent
      },
      {
        path:'process-excercise', loadChildren:()=> import('./process-excercise/process-excercise.module')
        .then(mod=>mod.ProcessExcerciseModule)
      },
      {
        path:'progress-mapping', loadChildren:()=>import('./progress-mapping/progress-mapping.module')
        .then(mod=> mod.ProgressMappingModule)
      },
      {
        path:'student-zone', loadChildren:()=>import('./student-zone/student-zone.module')
        .then(mod=> mod.StudentZoneModule)
      },
      {
        path:'feedback', loadChildren:()=>import('./feedback/feedback.module')
        .then(mod=> mod.FeedbackModule)
      },
      {
        path:'publication',component:PublicationComponent
      },
      {
        path:'publication/:id',component:PublicationDetailsComponent
      },
      {
        path:'mcq', loadChildren:()=>import('./mcq/mcq.module')
        .then(mod=> mod.MCQModule)
      }
    ]
  },
  {
    path:'mentor-dash',component:MentorComponent,
    children:[
      {
        path:"",component:MentorHomeComponent,
      }
    ]
  },
  {
    path:'mentor-registration',component:MentorRegistrationComponent
  },
  {
    path:'mentor-login',component:MentorLoginComponent
  },
  {
    path:'experts',component:ViewAllMentorsComponent
  },
  {
    path:'video/:id',component:DemoVideoComponent
  },
  {
    path:"writing-services", component:PhdWritingComponent
  },
  {
    path:'success/:id',component:SuccessComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:"terms",component:TermsComponent
  },
  {
    path:"privacy",component:PrivacyComponent
  },
  {
    path:"refund",component:RefundComponent
  },
  {
    path:"bank",component:BankAccountComponent
  },
  {
    path:"support",component:SupportComponent
  },
  {
    path:"faqs",component:FaqsComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'gallery', loadChildren:()=>import('./shared/gallery/gallery.module')
    .then(mod=> mod.GalleryModule)
  },
  {
    path:'blog', loadChildren:()=>import('./blog/blog.module')
    .then(mod=> mod.BlogModule)
  },
  {
    path:'certificate', loadChildren:()=>import('./certificate/certificate.module')
    .then(mod=> mod.CertificateModule)
  },
  
  {
    path:'forget-password', component:ForgetPasswordComponent
  },

  
  {
    path:'**',component:NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
