import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AuthForms } from './shared/auth.forms';

@IonicPage({
  priority: 'high',
  segment: 'auth',
  name: 'auth',
})
@Component({
  templateUrl: 'auth.html',
})
export class AuthPage {
  public authForms = AuthForms;
  private displayedFrom = AuthForms.LOGIN;

  displayForm(form: AuthForms) {
    this.displayedFrom = form;
  }
}
