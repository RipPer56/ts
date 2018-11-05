import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromptPasswordPage } from './prompt-password';

@NgModule({
  declarations: [
    PromptPasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(PromptPasswordPage),
  ],
})
export class PromptPasswordPageModule {
}
