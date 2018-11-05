import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Complaint } from '../../complaints/complaint.model';
import { ComplaintsDal } from '../../complaints/complaints.dal';
import { FoldersDal } from '../../folders/folder.dal';
import { Folder } from '../../folders/folder.model';
import { Stats } from '../../shared/models/stats.model';
import { ErrorService } from '../../shared/services/error.service';
import { StatsDal } from '../../shared/services/stats/stats.dal';

@Component({
  selector: 'ba-dashboard-details',
  templateUrl: 'dashboard-details.html',
})
export class DashboardDetailsComponent implements OnInit {
  complaints: Complaint[] = [];
  complaintsIsLoading: boolean = false;
  folders: Folder[] = [];
  folderIsLoading: boolean = false;
  stats: Stats;
  statsAreLoading: boolean = true;
  //TODO get id of user from AuthService
  private adherentId: string = '16550';


  private complaintListSubscription: Subscription;
  private folderListSubscription: Subscription;
  private statsSubscription: Subscription;

  constructor(private foldersDal: FoldersDal,
              private complaintsDal: ComplaintsDal,
              private statsDal: StatsDal,
              private errorService: ErrorService,
              private navCtrl: NavController) {
  }

  ngOnInit() {
    this.getFolders();
    this.getComplaints();
    this.getStats();
  }

  displayAllFolders() {
    this.navCtrl.push('folder-list');
  }

  displayAllComplaints() {
    this.navCtrl.push('complaint-list');
  }

  ngOnDestroy() {
    if (this.complaintListSubscription)
      this.complaintListSubscription.unsubscribe();

    if (this.folderListSubscription)
      this.folderListSubscription.unsubscribe();

    if (this.statsSubscription)
      this.statsSubscription.unsubscribe();

  }

  displayAddComplaint() {

    /**
     *  On passe "" comme valeur pour éviter les bugs de construction d'URL (exemple /:folderId, /nul, /undefined)
     */
    this.navCtrl.push('add-complaint', {folderId: ''});
  }

  private getFolders() {
    this.folderIsLoading = true;
    this.folderListSubscription = this.foldersDal.getAllFolders(this.adherentId)
      .subscribe((folders: Folder[]) => {
        this.folders = folders;
        this.folderIsLoading = false;
      }, error => {
        this.errorService.sendError(error);
        this.folderIsLoading = false;
      });
  }

  private getComplaints() {
    this.complaintsIsLoading = true;
    this.complaintListSubscription = this.complaintsDal.getAllComplaints(this.adherentId)
      .subscribe((complaints: Complaint[]) => {
        this.complaints = complaints;
        this.complaintsIsLoading = false;
      }, (error: any) => {
        this.errorService.sendError(error);
        this.complaintsIsLoading = false;
      });
  }

  private getStats() {
    this.statsSubscription = this.statsDal.getStats(this.adherentId)
      .subscribe((stats: Stats) => {
        this.stats = stats;
        this.statsAreLoading = false;
      }, (error: any) => {
        this.errorService.sendError(error);
        this.statsAreLoading = false;
      });
  }
}
