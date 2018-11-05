import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintDetailPage } from './complaint-detail';
import { ComplaintsModule } from "../complaint.module";
import { LoadService } from "../../shared/services/Load.service";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    ComplaintDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintDetailPage),
    SharedModule,
    ComplaintsModule,

  ],
  providers: [
    LoadService
  ]
})
export class ComplaintDetailPageModule {
}
