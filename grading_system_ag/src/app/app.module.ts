import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutComponent } from './layout/layout.component';
import { StudentsComponent } from './layout/students/students.component';
import { TeachersComponent } from './layout/teachers/teachers.component';
import { ComponentsModule } from './components/components.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './layout/dashboard/dashboard.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
    RegistrationModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
