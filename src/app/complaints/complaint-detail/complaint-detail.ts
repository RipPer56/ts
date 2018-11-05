import { Component, ViewChild } from '@angular/core';
import { Content, IonicPage, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { ErrorService } from '../../shared/services/error.service';
import { LoadService } from '../../shared/services/Load.service';
import { Complaint, ComplaintStatus } from '../complaint.model';
import { ComplaintsDal } from '../complaints.dal';

@IonicPage({
  name: "complaint-detail-page",
  segment: "complaint-detail/:id",
  defaultHistory: ['complaint-list'],
})
@Component({
  selector: "complaint-detail-page",
  templateUrl: "complaint-detail.html",
})
export class ComplaintDetailPage {
  @ViewChild(Content) content: Content;
  complaintStatus = ComplaintStatus;
  complaint: Complaint;
  private complaintSubscription: Subscription;

  constructor(private errorService: ErrorService,
              private navParams: NavParams,
              private complaintDal: ComplaintsDal,
              public loadService: LoadService) {
  }


  ngOnInit() {
    this.getComplaintDetail();
  }

  ngOnDestroy() {
    if (this.complaintSubscription)
      this.complaintSubscription.unsubscribe();
  }

  private getComplaintDetail() {
    this.complaint = this.navParams.get("complaint");
    this.content.resize();
    if (!this.complaint) {
      this.loadService.start();
      const id = this.navParams.get("id");
      this.complaintSubscription = this.complaintDal.getComplaintDetailById(id)
        .subscribe((complaint: Complaint) => {
          this.loadService.stop();
          this.complaint = complaint;
          this.content.resize();
        }, error => {
          this.loadService.stop();
          this.errorService.sendError(error);
        });
    }
  }
}
