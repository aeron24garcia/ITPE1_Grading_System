import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=>import('./layout/layout.module').then(mod=>mod.LayoutModule),
  }
  ,
  {
    path: "Login",
    loadChildren: ()=>import('./login/login.module').then(mod=>mod.LoginModule),
  },
  {
    path: "Registration",
    loadChildren: ()=>import('./registration/registration.module').then(mod=>mod.RegistrationModule),
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
