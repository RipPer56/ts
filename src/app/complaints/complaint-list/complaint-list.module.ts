import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintListPage } from './complaint-list';
import { SharedModule } from "../../shared/shared.module";
import { ComplaintsModule } from "../complaint.module";

@NgModule({
  declarations: [
    ComplaintListPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintListPage),
    SharedModule,
    ComplaintsModule,

  ],
})
export class ComplaintListPageModule {
}
