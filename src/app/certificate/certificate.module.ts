import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificateHomeComponent } from './certificate-home/certificate-home.component';
import { CertificateDetailComponent } from './certificate-detail/certificate-detail.component';


@NgModule({
  declarations: [
    CertificateHomeComponent,
    CertificateDetailComponent
  ],
  imports: [
    CommonModule,
    CertificateRoutingModule
  ]
})
export class CertificateModule { }
