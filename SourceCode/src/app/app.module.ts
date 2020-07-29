import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Regform1Component } from './regform1/regform1.component';
import { Regform2Component } from './regform2/regform2.component';
import { Regform3Component } from './regform3/regform3.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { UserService } from './user.service';
import { FormsModule }   from '@angular/forms';
import { Reg1Service } from './reg1.service';
import { ConfirmEqualValidatorDirective } from './signup/check_password.directive';
import { AuthGuardService } from './auth/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthRegService } from './auth/auth-reg.service';
import { UploadComponent } from './upload/upload.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    Regform1Component,
    Regform2Component,
    Regform3Component,
    ProfileComponent,
    SearchComponent,
    ConfirmEqualValidatorDirective,
    LogoutComponent,
    UploadComponent,
    AdminComponent  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : '',
        component : HomeComponent
      },
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path: 'signup',
        component : SignupComponent
      },
      {
        path : 'regform/1',
        component : Regform1Component,
        canActivate:[AuthRegService]
      },
      {
        path : 'regform/2',
        component : Regform2Component,
        canActivate:[AuthRegService]
      },
      {
        path : 'regform/3',
        component : Regform3Component,
        canActivate:[AuthRegService]

      },
      {
        path : 'profile',
        component : ProfileComponent,
        canActivate : [AuthGuardService]
      },
      {
        path : 'search',
        component : SearchComponent,
        canActivate : [AuthGuardService]
      },
      {
        path : 'update',
        component : UploadComponent,
        canActivate : [AuthGuardService]
      },
      {
        path : 'admin',
        component : AdminComponent,
      },
      {
        path : 'logout',
        component : LogoutComponent
      },
      {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
      }

    ])
  ],
  providers: [UserService,Reg1Service,AuthGuardService,AuthRegService],
  bootstrap: [AppComponent]
})
export class AppModule { }
