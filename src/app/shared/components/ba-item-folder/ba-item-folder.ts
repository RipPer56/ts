import { Component, Input } from '@angular/core';
import { Folder, FolderStatusColor } from "../../../folders/folder.model";
import { NavController } from "ionic-angular";

@Component({
  selector: 'ba-item-folder',
  templateUrl: 'ba-item-folder.html'
})
export class ItemFolderComponent {
  @Input() folder: Folder;
  public folderStatusColors = FolderStatusColor;

  constructor(private navCtrl: NavController) {
  }

  showFolderDetails() {
    this.navCtrl.push('folder-detail-page', {folder: this.folder, id: this.folder.id});
  }

}
