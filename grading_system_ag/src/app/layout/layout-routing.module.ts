import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from './layout.component';

const routes : Routes = [
{
  path:"",
  component: LayoutComponent,
  children:[
    {
      path:"", redirectTo: "manage/dashboard", pathMatch:"prefix",
    },
    {
      path: "manage/students",
      loadChildren:()=>import('./students/students.module').then(mod=>mod.StudentsModule),
    },
    {
      path: "manage/teachers",
      loadChildren:()=>import('./teachers/teachers.module').then(mod=>mod.TeachersModule),
    },
    {
      path: "manage/dashboard",
      loadChildren:()=>import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule),
    }
  ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
  