import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedModule } from '../shared/shared.module';
import { AuthPage } from './auth';
import { LoginFormComponent } from './login-form/login-form';
import { RegisterFormComponent } from './register/register-form';
import { ResetPasswordFormComponent } from './reset-password/reset-password';
import { FormsDataService } from './shared/forms-data-service';
import { LoadService } from "../shared/services/Load.service";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
  declarations: [
    AuthPage,
    LoginFormComponent,
    ResetPasswordFormComponent,
    RegisterFormComponent
  ],
  imports: [
    IonicPageModule.forChild(AuthPage),
    IonicStorageModule.forRoot(),
    SharedModule,
  ],
  providers: [
    FormsDataService,
    LoadService
  ]
})

export class AuthPageModule {
}
