import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Nav, ViewController } from 'ionic-angular';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { AuthService } from '../shared/services/auth.service';
import { ErrorService } from '../shared/services/error.service';


const wizardPages = [
  'auth',
];

const permissedPages = [
  'dashboard',
  'folder-detail',
  'folder-detail-page',
  'prompt-password',
  'folder-list',
  'folder-list-page',
  'complaint-list',
  'complaint-list-page',
  'complaint-detail',
  'complaint-detail-page',
  'add-complaint',
  'add-complaint-page',
];

@Injectable()
export class NavService {

  constructor(private authService: AuthService,
              private errorService: ErrorService) {
  }

  initNav(nav: Nav) {
    if (this.isThereNoURL(nav)) {
      nav.setRoot('auth');
    }

    combineLatest(this.authService.userChanges(), nav.viewWillEnter)
      .subscribe(([user, view]: [firebase.User | null, ViewController]) => {
        if (!view) {
          return;
        }
        let viewName: string = view.id + '';
        if (user) {
          if (this.isPageNeedAuthentification(viewName.split('/')[0])) {
            return;
          }
          nav.setRoot('dashboard');
        } else {

          if (this.isWizardPage(viewName.split('/')[0])) {
            return;
          }
          nav.setRoot('auth');

        }
      }, error => {
        this.errorService.handleError(error);
      });

  }


  redirectTo(nav: Nav, pageName: string, fromPage: string | undefined, back?: boolean): void {
    if (!pageName || pageName === fromPage) {
      return;
    }
    nav.setRoot(pageName, null, {
      animate: true,
      direction: back ? 'back' : 'forward',
      keyboardClose: false,
    }).catch(e => console.error(e));

  }

  private isWizardPage(page: string | undefined): boolean {
    return !page || (wizardPages.indexOf(page) > -1);
  }


  private isPageNeedAuthentification(page: string | undefined): boolean {
    return !page || (permissedPages.indexOf(page) > -1);
  }

  private isThereNoURL(nav: Nav): boolean {
    return nav._linker._history.indexOf('/') == 0;
  }

}
