import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FolderDetailPage } from './folder-detail';
import { SharedModule } from "../../shared/shared.module";
import { FoldersModule } from "../folders.module";
import { LoadService } from "../../shared/services/Load.service";

@NgModule({
  declarations: [
    FolderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FolderDetailPage),
    SharedModule,
    FoldersModule
  ],
  providers: [
    LoadService
  ]
})

export class FolderDetailModule {
}
