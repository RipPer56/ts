import { Component, OnInit } from '@angular/core';
import { InfiniteScroll, IonicPage, NavController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { ErrorService } from '../../shared/services/error.service';
import { Complaint } from '../complaint.model';
import { ComplaintsDal } from '../complaints.dal';

@IonicPage({
  name: 'complaint-list',
})
@Component({
  selector: "complaint-list-page",
  templateUrl: "complaint-list.html",
})
export class ComplaintListPage implements OnInit {
  //TODO @input from dashboard section
  adherentId = "K498220";
  complaints: Complaint[] = [];
  isloading: boolean = true;
  data: Complaint[] = [];
  start = 1;
  end = 6;
  noMoreData: boolean = false;

  private complaintListSubscription: Subscription[] = [];

  constructor(private complaintDal: ComplaintsDal,
              private errorService: ErrorService,
              private navCtrl: NavController) {
  }

  ngOnInit() {
    this.getComplaints();
  }

  doInfinite(infiniteScroll: InfiniteScroll) {
    this.end = this.start + 2;
    this.complaintListSubscription.push(this.complaintDal.getAllComplaints(this.adherentId, this.start, this.end)
      .subscribe((complaints: Complaint[]) => {
        this.data = complaints;
        if (this.data.length == 0) {
          infiniteScroll.enable(false);
          this.noMoreData = true;
          return;
        }
        for (let i = 0; i < this.data.length; i++) {
          this.complaints.push(this.data[i]);
        }
        this.start = this.end + 1;
        infiniteScroll.complete();
      }, (error: any) => {
        this.errorService.sendError(error);
        infiniteScroll.complete();
      }));
  }

  ngOnDestroy() {
    for (let subscription of this.complaintListSubscription)
      if (subscription) {
        subscription.unsubscribe();
      }
  }

  private getComplaints() {
    this.complaintListSubscription.push(this.complaintDal.getAllComplaints(this.adherentId, this.start, this.end)
      .subscribe((complaints: Complaint[]) => {
        this.isloading = false;
        this.complaints = complaints;
      }, error => {
        this.isloading = false;
        this.errorService.sendError(error);
      }));
    this.start = this.end + 1;
  }

  displayAddComplaint() {

    /**
     *  we passed "" as value to avoid URL errors (such as /:folderId, /nul, /undefined)
     */
    this.navCtrl.push('add-complaint', {folderId: ''});
  }
}
