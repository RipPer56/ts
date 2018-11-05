import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Adherent } from '../../shared/models/adherent.model';
import { User } from '../../shared/models/user.model';
import { AdherentsDal } from '../../shared/services/adherents/adherents.dal';
import { AuthService } from '../../shared/services/auth.service';
import { ErrorService } from '../../shared/services/error.service';
import { LoadService } from '../../shared/services/Load.service';
import { AuthForms } from '../shared/auth.forms';
import { authValidationPatterns } from '../shared/auth.validation.patterns';
import { matchOtherValidator } from '../shared/match-other-validator';
import { RegistrationSteps } from './registration-steps';

@Component({
  selector: 'ba-register-form',
  templateUrl: 'register-form.html'
})


@Injectable()
export class RegisterFormComponent implements OnInit {
  lastStep: boolean = false;
  registrationSteps = RegistrationSteps;
  currentStep: RegistrationSteps = this.registrationSteps.CIN;
  registrationForm: FormGroup;
  cinForm: FormControl;
  adherentForm: FormControl;
  adherentNumForm: FormControl;
  emailForm: FormControl;
  passwordForm: FormControl;
  confirmPasswordForm: FormControl;
  adherentsForCin: Adherent[] = [];
  @Output() displayForm = new EventEmitter<AuthForms>();
  private adherentSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private errorService: ErrorService,
              private adherentsDal: AdherentsDal,
              private loadService: LoadService) {
  }

  ngOnInit(): void {
    this.cinForm = new FormControl('', [Validators.required, Validators.pattern(authValidationPatterns['cin'])]);
    this.adherentForm = new FormControl('', [Validators.required]);
    this.emailForm = new FormControl('', [Validators.required, Validators.pattern(authValidationPatterns['email'])]);
    this.passwordForm = new FormControl('', [Validators.required, Validators.minLength(6)]);
    this.confirmPasswordForm = new FormControl('', [Validators.required, matchOtherValidator('passwordForm')]);
    this.adherentNumForm = new FormControl('', [Validators.required, Validators.pattern(authValidationPatterns['cin'])]);
    this.registrationForm = this.formBuilder.group({
      'cinForm': this.cinForm,
      'adherentNumForm': this.adherentNumForm,
      'adherentForm': this.adherentForm,
      'emailForm': this.emailForm,
      'passwordForm': this.passwordForm,
      'confirmPasswordForm': this.confirmPasswordForm
    });
  }

  nextStep(): void {
    switch (this.currentStep) {
      case RegistrationSteps.CIN: {
        this.populateAdherents();
        break;
      }
      case RegistrationSteps.AdherentSelection: {
        this.currentStep = this.registrationSteps.ProfileCompletion;
        this.lastStep = true;
        break;
      }
      case RegistrationSteps.ProfileCompletion: {
        this.registerNewUser();
        break;
      }
      default: {
        break;
      }
    }
  }

  previousStep(): void {
    switch (this.currentStep) {
      case RegistrationSteps.CIN: {
        this.displayForm.emit(AuthForms.LOGIN);
        break;
      }
      case RegistrationSteps.AdherentSelection: {
        this.currentStep = this.registrationSteps.CIN;
        break;
      }
      case RegistrationSteps.ProfileCompletion: {
        this.currentStep = this.registrationSteps.AdherentSelection;
        this.lastStep = false;
        break;
      }
      default: {
        break;
      }
    }
  }

  async registerNewUser() {
    if (this.registrationForm.valid) {
      this.loadService.start();
      try {
        let user: User = {
          name: this.registrationForm.value.adherentForm.name,
          id: this.registrationForm.value.adherentForm.id,
          cin: this.registrationForm.value.cinForm,
          email: this.registrationForm.value.emailForm,
          adherentNum: this.registrationForm.value.adherentNumForm,
        };
        await this.authService.signUp(user, this.registrationForm.value.passwordForm);
        this.displayForm.emit(AuthForms.LOGIN);
      } catch (error) {
        this.errorService.handleError(error);
      }
      this.loadService.stop();
    }
  }

  registrationStepIsValid(): boolean {
    switch (this.currentStep) {
      case RegistrationSteps.CIN: {
        return this.cinForm.valid;
      }
      case RegistrationSteps.AdherentSelection: {
        return this.adherentForm.valid;
      }
      case RegistrationSteps.ProfileCompletion: {
        return this.emailForm.valid && this.passwordForm.valid && this.confirmPasswordForm.valid
          && this.passwordForm.value == this.confirmPasswordForm.value;
      }
      default: {
        return false;
      }
    }
  }

  compareByAdherentId(item1: Adherent, item2: Adherent) {
    return item1.id === item2.id;
  }

  ngOnDestroy() {
    if (this.adherentSubscription)
      this.adherentSubscription.unsubscribe();
  }

  private populateAdherents() {
    if (this.cinForm.valid) {
      this.loadService.start();
      this.adherentSubscription = this.adherentsDal.getAdherentsByCIN(this.cinForm.value, this.adherentNumForm.value).subscribe((value: Adherent[]) => {
        this.adherentsForCin = value;
        this.currentStep = this.registrationSteps.AdherentSelection;
        this.loadService.stop();
      }, reason => {
        this.currentStep = this.registrationSteps.CIN;
        this.errorService.handleError(reason);
        this.loadService.stop();
      });
    }
  }


}

