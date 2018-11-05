import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, ViewController } from 'ionic-angular';
import { ErrorService } from '../services/error.service';

@IonicPage({
  segment: 'prompt-password',
  name: 'prompt-password',
})
@Component({
  selector: 'page-prompt-password',
  templateUrl: 'prompt-password.html',
})
export class PromptPasswordPage {
  passwordForm: FormGroup;
  disabled: boolean;

  constructor(private viewCtrl: ViewController,
              private  errorService: ErrorService,
              private fb: FormBuilder,
              private changeDetectionRef: ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.passwordForm = this.fb.group({
      password: this.fb.control('', [Validators.required,
        Validators.minLength(8)]),
    });
  }

  closeModal(password?: string) {
    this.viewCtrl.dismiss(password).catch((error: any) => this.errorService.handleError(error));
  }

  submitPassword(): void {
    this.disabled = true;
    this.changeDetectionRef.detectChanges();
    this.closeModal(this.passwordForm.value.password);
  }

}
