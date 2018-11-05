
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddComplaintPage } from './add-complaint';
import { ComplaintsModule } from "../complaint.module";
import { LoadService } from "../../shared/services/Load.service";

@NgModule({
  declarations: [
    AddComplaintPage,
  ],
  imports: [
    IonicPageModule.forChild(AddComplaintPage),
    ComplaintsModule,
  ],
  providers: [
    LoadService
  ]
})
export class AddComplaintPageModule {}
