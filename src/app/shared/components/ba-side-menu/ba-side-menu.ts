import { Component, OnInit } from '@angular/core';
import { App } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { CacheService } from '../../services/cache-service';
import { ErrorService } from '../../services/error.service';
import { PageEntriesService } from './page-entries.service';
import { PageEntry } from './page-entry.model';


@Component({
  selector: 'ba-side-menu',
  templateUrl: 'ba-side-menu.html',
})
export class SideMenuComponent implements OnInit {
  private pages: PageEntry[];

  constructor(private errorService: ErrorService,
              private authService: AuthService,
              private pageEntriesService: PageEntriesService,
              private app: App,
              private cacheService: CacheService) {
  }

  ngOnInit() {
    this.pages = this.pageEntriesService.getPages();
  }

  clickMenuItem(item: PageEntry): void {
    if (this.app != undefined && this.app.getActiveNavs() != undefined && this.app.getActiveNavs().length != 0
      && this.app.getActiveNavs()[0].getActive() != undefined) {
      if (item.logout != undefined && item.logout == true) {
        this.authService.logout()
          .then(() => {
            this.cacheService.refreshGlobalCache();
          }).catch(error => this.errorService.handleError(error));
      } else {
        if (item.component != '') {
          this.app.getActiveNavs()[0].setRoot(item.component);
        }
      }
    }
  }


}
