import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateHomeComponent } from './certificate-home/certificate-home.component';
import { CertificateDetailComponent } from './certificate-detail/certificate-detail.component';

const routes: Routes = [
  {
    path:'',component:CertificateHomeComponent,
    
  },
  {
    path:':title',component:CertificateDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificateRoutingModule { }
