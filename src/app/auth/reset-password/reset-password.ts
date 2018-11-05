import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { AuthService } from '../../shared/services/auth.service';
import { ErrorService } from '../../shared/services/error.service';
import { LoadService } from '../../shared/services/Load.service';
import { ToastService } from '../../shared/services/toast.service';
import { AuthForms } from '../shared/auth.forms';
import { authMessages } from '../shared/auth.messages';
import { authValidationPatterns } from '../shared/auth.validation.patterns';


@Component({
  selector: 'ba-reset-password-form',
  templateUrl: 'reset-password.html',
})


@Injectable()
export class ResetPasswordFormComponent implements OnInit {
  resetPasswordForm: FormGroup;
  @Output() displayForm = new EventEmitter<AuthForms>();

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private toastService: ToastService,
              private errorService: ErrorService,
              public loading: LoadingController,
              private loadService: LoadService,
              private storage: Storage) {
  }


  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(authValidationPatterns['email'])]],
    });
  }

  resetPassword(): void {
    this.loadService.start();
    this.authService.resetPassword(this.resetPasswordForm.value.email)
      .then(() => {
        this.toastService.toast(authMessages['RESET_PASSWORD_MAIL_SENT']);
        this.storage.set('email', this.resetPasswordForm.value.email);
        this.displayForm.emit(AuthForms.LOGIN);
        this.loadService.stop();

      })
      .catch((error) => {
        this.errorService.handleError(error);
        this.loadService.stop();

      });
  }

  displayLoginForm(): void {
    this.displayForm.emit(AuthForms.LOGIN);
  }
}

