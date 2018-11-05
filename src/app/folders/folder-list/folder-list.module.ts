import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FolderListPage } from './folder-list';
import { SharedModule } from "../../shared/shared.module";
import { FoldersModule } from "../folders.module";

@NgModule({
  declarations: [
    FolderListPage,
  ],
  imports: [
    IonicPageModule.forChild(FolderListPage),
    SharedModule,
    FoldersModule
  ],
})
export class FolderListPageModule {
}
