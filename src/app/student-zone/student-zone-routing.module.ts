import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentZoneHomeComponent } from './student-zone-home/student-zone-home.component';

const routes: Routes = [
  {
    path:'',component:StudentZoneHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentZoneRoutingModule { }
