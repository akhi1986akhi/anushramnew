import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressMappingDashComponent } from './progress-mapping-dash/progress-mapping-dash.component';

const routes: Routes = [
  {
    path:'dash',component:ProgressMappingDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressMappingRoutingModule { }
