import { Component, OnInit } from '@angular/core';
import { InfiniteScroll, IonicPage, NavController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { ErrorService } from '../../shared/services/error.service';
import { ToastService } from '../../shared/services/toast.service';
import { FoldersDal } from '../folder.dal';
import { Folder } from '../folder.model';

@IonicPage({
  name: 'folder-list',
})
@Component({
  selector: "folder-list-page",
  templateUrl: "folder-list.html",
})
export class FolderListPage implements OnInit {
  //TODO @input from dashboard section
  adherentId = "K498220";
  folders: Folder[] = [];
  isLoading: boolean = false;
  data: Folder[] = [];
  start = 1;
  end = 6;
  private folderListSubscription: Subscription[] = [];
  noMoreData: boolean = false;


  constructor(private folderDal: FoldersDal,
              private errorService: ErrorService,
              private navCtrl: NavController,
              private toastService: ToastService) {
  }

  ngOnInit() {
    this.getFolders();
  }

  doInfinite(infiniteScroll: InfiniteScroll) {
    this.end = this.start + 2;
    this.folderListSubscription.push(this.folderDal.getAllFolders(this.adherentId, this.start, this.end)
      .subscribe((folders: Folder[]) => {
        this.data = folders;
        if (this.data.length == 0) {
          infiniteScroll.enable(false);
          this.noMoreData = true;
          return;
        }
        for (let i = 0; i < this.data.length; i++) {
          this.folders.push(this.data[i]);
        }
        this.start = this.end + 1;
        infiniteScroll.complete();
      }, error => {
        this.errorService.sendError(error);
        infiniteScroll.complete();
      }));
  }

  ngOnDestroy() {
    for (let subscription of this.folderListSubscription)
      if (subscription) {
        subscription.unsubscribe();
      }
  }

  private getFolders() {
    this.isLoading = true;
    this.folderListSubscription.push(this.folderDal.getAllFolders(this.adherentId, this.start, this.end)
      .subscribe((folders: Folder[]) => {
        this.isLoading = false;
        this.folders = folders;
      }, error => {
        this.isLoading = false;
        this.errorService.sendError(error);
      }));
    this.start = this.end + 1;
  }


}
