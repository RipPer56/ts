import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Folder } from '../../folders/folder.model';
import { ErrorService } from '../../shared/services/error.service';
import { LoadService } from '../../shared/services/Load.service';
import { Complaint, ComplaintStatusColor } from '../complaint.model';
import { ComplaintsDal } from '../complaints.dal';

@IonicPage({
  name: 'add-complaint',
  segment: 'add-complaint/:folderId',
})
@Component({
  selector: 'page-add-complaint',
  templateUrl: 'add-complaint.html',
})
export class AddComplaintPage {
  reasons: any[] = [{msg: 'Erreur de remboursement'}, {msg: 'Rejet de réclamtion'}];
  private folderId: string = '';
  private complaintForm: FormGroup;
  private complaintSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private navParams: NavParams,
              private complaintDal: ComplaintsDal,
              private errorService: ErrorService,
              private navCtrl: NavController,
              private loadService: LoadService) {
  }

  ngOnInit() {
    this.buildGroupForm();
    this.getDataFromParameterOrUrl();
  }

  buildGroupForm() {
    this.complaintForm = this.formBuilder.group({
      'folderId': ['', [Validators.required, Validators.minLength(6)]],
      'descComplaint': ['', [Validators.required, Validators.minLength(30), Validators.maxLength(250)]],
      'reasonComplaint': ['', [Validators.required]],
    });
  }

  getDataFromParameterOrUrl() {
    this.folderId = this.navParams.get('folderId');
    let folder: Folder = this.navParams.get('folder');
    if (folder) {
      this.folderId = folder.id + '';
    }
  }

  sendComplaint() {
    if (this.complaintForm.valid) {
      let complaint: Complaint = {
        folderId: this.complaintForm.value.folderId,
        reason: this.reasons[this.complaintForm.value.reasonComplaint].msg,
        status: ComplaintStatusColor.SENT,
        description: this.complaintForm.value.descComplaint,
      };
      this.loadService.start('Envoi de la nouvelle réclamation');
      this.complaintSubscription = this.complaintDal.addComplaintByFolderId(complaint).subscribe(() => {
        this.navCtrl.setRoot('complaint-list');
        this.loadService.stop();
      }, reason => {
        this.errorService.sendError(reason);
        this.loadService.stop();
      });
    }
  }

  ngOnDestroy() {
    if (this.complaintSubscription)
      this.complaintSubscription.unsubscribe();
  }
}
