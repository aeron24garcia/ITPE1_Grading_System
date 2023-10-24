import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationModule } from './registration.module';


const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RegistrationRoutingModule { }
    