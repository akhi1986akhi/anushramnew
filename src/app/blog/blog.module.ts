import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    BlogHomeComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
