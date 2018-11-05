import { Component, Input } from '@angular/core';
import { Complaint} from "../../../complaints/complaint.model";
import { NavController } from "ionic-angular";

@Component({
  selector: 'ba-item-complaint',
  templateUrl: 'ba-item-complaint.html'
})
export class ItemComplaintComponent {
  @Input() complaint: Complaint;

  constructor(private navCtrl: NavController) {
  }

  showComplanitsDetails() {
    this.navCtrl.push('complaint-detail-page', {complaint: this.complaint, id: this.complaint.id});
  }

}
