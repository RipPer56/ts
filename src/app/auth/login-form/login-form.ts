import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../shared/services/auth.service';
import { ErrorService } from '../../shared/services/error.service';
import { LoadService } from '../../shared/services/Load.service';
import { AuthForms } from '../shared/auth.forms';
import { authValidationPatterns } from '../shared/auth.validation.patterns';


@Component({
  selector: 'ba-login-form',
  templateUrl: 'login-form.html',
})

@Injectable()
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  remember: boolean = false;
  @Output() displayForm = new EventEmitter<AuthForms>();

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private errorService: ErrorService,
              private loadService: LoadService,
              private storage: Storage) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern(authValidationPatterns['email'])]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'remember': false,
    });

    this.storage.get('email')
      .then((email) => {
        this.loginForm.patchValue({
          'email': email,
          'remember': !!email,
        });
      });
  }

  rememberMe() {
    this.auth.setPersistence(this.loginForm.value.remember);
    if (this.loginForm.value.remember) {
      this.storage.set('email', this.loginForm.value.email);
    }
    else {
      this.storage.set('email', null);
    }
  }

  login() {
    this.loadService.start();
    return this.auth.loginWithEmail(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        this.loadService.stop();
      })
      .catch(error => {
        this.errorService.handleError(error);
        this.loadService.stop();
      });
  }

  resetPassword() {
    this.displayForm.emit(AuthForms.RESET_PASSWORD);
  }

  signUp() {
    this.displayForm.emit(AuthForms.REGISTER);
  }

}
