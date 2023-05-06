import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqDashComponent } from './mcq-dash/mcq-dash.component';

const routes: Routes = [
  {
    path:'home',component:McqDashComponent

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MCQRoutingModule { }
