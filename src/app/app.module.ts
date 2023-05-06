import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';


import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import{HeaderComponent} from './header/header/header.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { HomeComponent } from './home/home/home.component';
import { CourseBannerComponent } from './home/course-banner/course-banner.component';
import { FeaturedComponent } from './home/featured/featured.component';
import { PopularComponent } from './home/popular/popular.component';
import { NewCommersComponent } from './home/new-commers/new-commers.component';
import { FunFactsComponent } from './home/fun-facts/fun-facts.component';
import { TrialComponent } from './home/trial/trial.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { TrainingOverviewComponent } from './home/training-overview/training-overview.component';
import { OverviewConnectionComponent } from './home/overview-connection/overview-connection.component';
import { TopMentorsComponent } from './home/top-mentors/top-mentors.component';
import { TrainingCoursesComponent } from './home/training-courses/training-courses.component';
import { UserComponent } from './dashboard/user/user.component';
import { MentorComponent } from './dashboard/mentor/mentor.component';
import { LoginComponent } from './account/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavUserComponent } from './dashboard/side-nav-user/side-nav-user.component';
import { UserDashboardComponent } from './dashboard/user/users/user-dashboard/user-dashboard.component';
import { DemoVideoComponent } from './video/demo-video/demo-video.component';
import { UserAccountComponent } from './dashboard/user/users/user-account/user-account.component';
import { UserProfileComponent } from './dashboard/user/users/user-profile/user-profile.component';
import { CommunicationComponent } from './dashboard/user/users/communication/communication.component';
import { AnushramVideoComponent } from './video/anushram-video/anushram-video.component';
import { CardComponent } from './dashboard/user/users/user-dashboard/card/card.component';
import { UserDashWelComponent } from './dashboard/user/users/user-dashboard/user-dash-wel/user-dash-wel.component';
import { VideoComponent } from './video/video/video.component';
import { MentorViewComponent } from './dashboard/user/users/mentor-view/mentor-view.component';
import { MentorViewCardSubscribeComponent } from './dashboard/user/users/mentor-view/mentor-view-card-subscribe/mentor-view-card-subscribe.component';
import { MentorViewCardComponent } from './dashboard/user/users/mentor-view/mentor-view-card/mentor-view-card.component';
import { MentorRegistrationComponent } from './dashboard/mentor/mentor-registration/mentor-registration.component';
import { MentorLoginComponent } from './account/mentor-login/mentor-login.component';
import { TermsComponent } from './shared/terms/terms.component';
import { RefundComponent } from './shared/refund/refund.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';
import { SupportComponent } from './shared/support/support.component';
import { FaqsComponent } from './shared/faqs/faqs.component';
import { BankAccountComponent } from './shared/bank-account/bank-account.component';
import { MentorNavigationComponent } from './dashboard/mentor/mentor-navigation/mentor-navigation.component';
import { MentorHomeComponent } from './dashboard/mentor/mentor-home/mentor-home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ViewAllMentorsComponent } from './dashboard/mentor/view-all-mentors/view-all-mentors.component';
import { PhdWritingComponent } from './writing-services/phd-writing/phd-writing.component';
import { ContactComponent } from './shared/contact/contact.component';
import { PhdComponent } from './dashboard/user/users/phd/phd.component';
import { PhdAddOnComponent } from './dashboard/user/users/user-dashboard/phd-add-on/phd-add-on.component';
import { StageOneComponent } from './dashboard/user/users/phd/stage-one/stage-one.component';
import { StageTwoComponent } from './dashboard/user/users/phd/stage-two/stage-two.component';
import { StageThreeComponent } from './dashboard/user/users/phd/stage-three/stage-three.component';
import { JobsStationComponent } from './dashboard/jobs-station/jobs-station.component';
import { ArticlesComponent } from './dashboard/user/users/phd/articles/articles.component';
import { SchollerSummaryComponent } from './dashboard/user/users/scholler-summary/scholler-summary.component';
import { ForgetPasswordComponent } from './account/forget-password/forget-password.component';
import { SuccessComponent } from './shared/success/success.component';
import { AboutComponent } from './shared/about/about.component';
import { PublicationComponent } from './dashboard/user/users/publication/publication.component';
import { PublicationDetailsComponent } from './dashboard/user/users/publication/publication-details/publication-details.component';
import { CourseBannerCertificateComponent } from './home/course-banner-certificate/course-banner-certificate.component';


interface NgxSpinnerConfig {
  type?: string;
}
const googleLoginOptions = {
  scope: 'profile email',
  plugin_name:'anushram' //can be any name
}; 
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeaderTopComponent,
    HeaderNavComponent,
    HomeComponent,
    CourseBannerComponent,
    FeaturedComponent,
    PopularComponent,
    NewCommersComponent,
    FunFactsComponent,
    TrialComponent,
    TestimonialsComponent,
    TrainingOverviewComponent,
    OverviewConnectionComponent,
    TopMentorsComponent,
    TrainingCoursesComponent,
    UserComponent,
    MentorComponent,
    LoginComponent,
    SideNavUserComponent,
    UserDashboardComponent,
    DemoVideoComponent,
    UserAccountComponent,
    UserProfileComponent,
    CommunicationComponent,
    AnushramVideoComponent,
    CardComponent,
    UserDashWelComponent,
    VideoComponent,
    MentorViewComponent,
    MentorViewCardSubscribeComponent,
    MentorViewCardComponent,
    MentorRegistrationComponent,
    MentorLoginComponent,
    TermsComponent,
    RefundComponent,
    PrivacyComponent,
    SupportComponent,
    FaqsComponent,
    BankAccountComponent,
    MentorNavigationComponent,
    MentorHomeComponent,
    NoPageComponent,
    ViewAllMentorsComponent,

    PhdWritingComponent,
     ContactComponent,
     PhdComponent,
     PhdAddOnComponent,
     StageOneComponent,
     StageTwoComponent,
     StageThreeComponent,
     JobsStationComponent,
     ArticlesComponent,
     SchollerSummaryComponent,
     ForgetPasswordComponent,
     SuccessComponent,
     AboutComponent,
     PublicationComponent,
     PublicationDetailsComponent,
     CourseBannerCertificateComponent,
     
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
	  ReactiveFormsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    SocialLoginModule,
   
    
  
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '744830052038-7rcpgeaec2411bmrgsse6ijmtvap57e6.apps.googleusercontent.com',
              googleLoginOptions
             
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('91830886008e360feec5589e4f810907')
          }
          
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
