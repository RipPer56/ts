import { Component, ViewChild } from '@angular/core';
import { Content, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { ErrorService } from '../../shared/services/error.service';
import { LoadService } from '../../shared/services/Load.service';
import { FoldersDal } from '../folder.dal';
import { Folder, FolderStatus } from '../folder.model';

@IonicPage({
  name: 'folder-detail-page',
  segment: 'folder-detail/:id',
  defaultHistory: ['folder-list'],
})
@Component({
  selector: 'folder-detail-page',
  templateUrl: './folder-detail.html',
})

export class FolderDetailPage {
  @ViewChild(Content) content: Content;
  public folderStatus = FolderStatus;
  folder: Folder;
  private folderSubscription: Subscription;

  constructor(private errorService: ErrorService,
              private navParams: NavParams,
              private folderDal: FoldersDal,
              public loadService: LoadService,
              private navCtrl: NavController) {
  }

  ngOnInit() {
    this.getFolderDetail();
  }

  AddNewComplaint() {
    this.navCtrl.push('add-complaint', {folder: this.folder, folderId: this.folder.id});
  }

  ngOnDestroy() {
    if (this.folderSubscription) {
      this.folderSubscription.unsubscribe();
    }
  }

  private getFolderDetail() {
    this.folder = this.navParams.get('folder');
    this.content.resize();
    if (!this.folder) {
      this.loadService.start('Chargement du dossier');
      const id = this.navParams.get('id');
      this.folderSubscription = this.folderDal.folderDetail(id)
        .subscribe((folder: Folder) => {
          this.loadService.stop();
          this.folder = folder;
          this.content.resize();
        }, error => {
          this.loadService.stop();
          this.errorService.sendError(error);
        });
    }
  }
}
